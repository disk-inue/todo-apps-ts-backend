import type { MutationResolvers } from "./../../../types.generated";
export const createTodo: NonNullable<MutationResolvers["createTodo"]> = async (
  _parent,
  { title, completed },
  { prisma },
) => {
  await prisma.todo.create({
    data: {
      title: title,
      completed: completed,
    },
  });

  return prisma.todo.findMany();
};
