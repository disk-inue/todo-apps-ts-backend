import { ApolloServer, BaseContext } from "@apollo/server";
import fastifyApollo, { fastifyApolloDrainPlugin, fastifyApolloHandler } from "@as-integrations/fastify";

import fastify from "./fastify.mjs";
import { resolvers } from "./schema/resolvers.generated.mjs";
import { typeDefs } from "./schema/typeDefs.generated.mjs";

const apollo = new ApolloServer<BaseContext>({
  typeDefs,
  resolvers,
  plugins: [fastifyApolloDrainPlugin(fastify)],
});
await apollo.start();
await fastify.register(fastifyApollo(apollo));
fastify.route({
  url: "/gql",
  method: ["GET", "OPTIONS", "POST"],
  handler: fastifyApolloHandler(apollo),
});

export default fastify;
