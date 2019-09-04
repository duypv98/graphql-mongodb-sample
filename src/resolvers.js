import { Book } from "./models/Book";

export const resolvers = {
    Query: {
        hello: () => "Hello",
        books: () => Book.find(),
        totalBooks: () => Book.countDocuments()
    },
    Mutation: {
        createBook: async (_, { title, author, type, rating }) => {
            const newBook = new Book({ title, author, type, rating });
            await newBook.save();
            console.log(newBook);
            return newBook;
        }
    }
}