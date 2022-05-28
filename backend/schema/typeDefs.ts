import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        getUsers: [User]!
        getUserByUsername(username: String!): User
    }
    type Mutation {
        createUser(username: String!, password: String!, name: String!): User!
    }

    type User {
        id: ID!
        username: String!
        name: String!
    }
`

export default typeDefs;