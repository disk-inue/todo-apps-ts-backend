/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { AddBookMutationResponse } from './book/resolvers/AddBookMutationResponse.js';
import    { Book } from './book/resolvers/Book.js';
import    { addBook as Mutation_addBook } from './book/resolvers/Mutation/addBook.js';
import    { books as Query_books } from './book/resolvers/Query/books.js';
import    { user as Query_user } from './user/resolvers/Query/user.js';
import    { User } from './user/resolvers/User.js';
    export const resolvers: Resolvers = {
      Query: { books: Query_books,user: Query_user },
      Mutation: { addBook: Mutation_addBook },
      
      AddBookMutationResponse: AddBookMutationResponse,
Book: Book,
User: User
    }
