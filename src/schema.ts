export const typeDefs = `
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }

  enum BookType {
    NOVEL
    ESSAY
    BIOGRAPHY
  }

  input BookPostContent {
    title: String
    author: String
  }

  type Mutation {
    addBook(bookContent: BookPostContent): Book
  }

  type Query {
    books: [Book]
    authors: [Author]
    bookType: [BookType]
  }
`;
