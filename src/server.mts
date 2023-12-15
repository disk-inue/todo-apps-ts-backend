import Fastify from "fastify";
const fastify = Fastify({ logger: true });

fastify.get("/", function handler() {
  return { hello: "world" };
});

try {
  await fastify.listen({ port: 4000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
