import { gql } from 'apollo-server-express';
export const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
        type: String!
        rating: Float!
    }
    
    type Query {
        hello: String!
        totalBooks: Int!
        books(title: String, author: String, type: String, rating: Float): [Book]!
    }

    type Mutation {
        createBook(title: String!, author: String!, type: String!, rating: Float!): Book!
    }
`;