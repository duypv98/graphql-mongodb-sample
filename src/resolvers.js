import { Book } from "./models/Book";

export const resolvers = {
    Query: {
        hello: () => "Hello",
        totalBooks: () => Book.countDocuments(),
        books: async (_, args) => {
            if (args.length == 0) {
                const _listBook = await Book.find();
                return _listBook;
            } else {
                const conditions = {};
                const { title, author, type, rating } = args;
                if (title.length != 0) {
                    conditions.title = title;
                }
                if (author.length != 0) {
                    conditions.author = author;
                }
                if (type.length != 0) {
                    conditions.type = type;
                }
                if (rating != null) {
                    conditions.rating = rating;
                }
                const _listBook = await Book.find(conditions);
                return _listBook;
            }

        }
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