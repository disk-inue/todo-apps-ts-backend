/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { createTodo as Mutation_createTodo } from "./todo/resolvers/Mutation/createTodo";
import { todos as Query_todos } from "./todo/resolvers/Query/todos";
import { Todo } from "./todo/resolvers/Todo";
export const resolvers: Resolvers = {
  Query: { todos: Query_todos },
  Mutation: { createTodo: Mutation_createTodo },

  Todo: Todo,
};
