export const typeDefs = `
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;
