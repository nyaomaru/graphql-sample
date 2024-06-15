import { books, authors } from "./data.js";
import { MutationAddBookArgs } from "@/graphql";

export const resolvers = {
  BookType: {
    NOVEL: "NOVEL",
    ESSAY: "ESSAY",
    BIOGRAPHY: "BIOGRAPHY",
  },
  Query: {
    books: () => books,
    authors: () => authors,
    bookType: () => ["NOVEL", "ESSAY", "BIOGRAPHY"],
  },
  Mutation: {
    addBook: (_parent: undefined, args: MutationAddBookArgs) => {
      const { bookContent } = args;
      let authorObj = authors.find((a) => a.name === bookContent.author);

      if (!authorObj) {
        authorObj = {
          name: bookContent.author,
          books: [{ title: bookContent.title ?? "" }],
        };
        authors.push(authorObj);
      }

      const newBook = { title: bookContent.title, author: authorObj };
      books.push(newBook);
      authorObj.books.push(newBook);

      return newBook;
    },
  },
};
