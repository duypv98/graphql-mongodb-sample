import mongoose from 'mongoose';

const bookSchema = {
    title: String,
    author: String,
    type: String,
    rating: Number
}

export const Book = mongoose.model("Book", bookSchema, "books");