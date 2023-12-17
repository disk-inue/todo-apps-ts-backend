import type { QueryResolvers } from "./../../../types.generated";
export const todos: NonNullable<QueryResolvers["todos"]> = async (_parent, _args, { prisma }) => {
  return prisma.todo.findMany();
};
