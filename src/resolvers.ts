import { books, authors } from "./data.js";
import { MutationAddBookArgs } from "@/graphql";

export const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
  Mutation: {
    addBook: (_parent: undefined, args: MutationAddBookArgs) => {
      const { title, author } = args;
      let authorObj = authors.find((a) => a.name === author);

      if (!authorObj) {
        authorObj = { name: author, books: [{ title: title ?? "" }] };
        authors.push(authorObj);
      }

      const newBook = { title, author: authorObj };
      books.push(newBook);
      authorObj.books.push(newBook);

      return newBook;
    },
  },
};
