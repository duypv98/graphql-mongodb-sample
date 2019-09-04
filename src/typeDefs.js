import { gql } from 'apollo-server-express';
export const typeDefs = gql`
    type Query {
        hello: String!
        books: [Book!]!
        totalBooks: Int!
    }

    type Book {
        id: ID!
        title: String!
        author: String!
        type: String!
        rating: Float!
    }

    type Mutation {
        createBook(title: String!, author: String!, type: String!, rating: Float!): Book!
    }
`;