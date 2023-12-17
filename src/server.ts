// import fastify from "./apollo.js";
import type { FastifyReply, FastifyRequest } from "fastify";
import Fastify from "fastify";
import { createSchema, createYoga } from "graphql-yoga";

import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";

const app = Fastify({ logger: true });

const schema = createSchema<{
  req: FastifyRequest;
  reply: FastifyReply;
}>({ typeDefs: typeDefs, resolvers: resolvers });

const yoga = createYoga<{
  req: FastifyRequest;
  reply: FastifyReply;
}>({
  schema,
  logging: {
    debug: (...args) => args.forEach((arg) => app.log.debug(arg)),
    info: (...args) => args.forEach((arg) => app.log.info(arg)),
    warn: (...args) => args.forEach((arg) => app.log.warn(arg)),
    error: (...args) => args.forEach((arg) => app.log.error(arg)),
  },
});

app.get("/", async (_request: FastifyRequest, _reply: FastifyReply) => {
  return { hello: "world" };
});

app.route({
  url: yoga.graphqlEndpoint,
  method: ["GET", "POST", "OPTIONS"],
  handler: async (req, reply) => {
    const response = await yoga.handleNodeRequest(req, {
      req,
      reply,
    });
    response.headers.forEach((value, key) => {
      reply.header(key, value);
    });
    reply.status(response.status);
    reply.send(response.body);
    return reply;
  },
});

app.listen({ port: 4000 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
