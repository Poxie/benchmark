import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        getUsers: [User]!
        getUserByUsername(username: String!): User
        login(username: String!, password: String!): AuthData
        getMe: User

        getUserHighScore(id: String!, gameId: String!): Score
        getUserScores(id: String!, gameId: String!): [Score]!
        getGameLeaderboard(gameId: String!): [HighScore]!

        getProfileOverview(userId: String!): ProfileOverview!
    }
    type Mutation {
        createUser(username: String!, password: String!, name: String): User!
        createScore(userId: String!, gameId: String!, score: Int!): Score!
    }

    type User {
        id: ID!
        username: String!
        name: String
    }
    type Score {
        id: String!
        userId: String!
        user: User!
        gameId: String!
        score: Int!
        game: Game!
    }
    type HighScore {
        id: String!
        userId: String!
        user: User!
        gameId: String!
        score: Int!
        position: Int!
        game: Game!
    }
    type Game {
        id: String!
        title: String!
        description: String!
    }
    type ProfileOverview {
        highScores: [HighScore]!
        totalScore: Int!
        differentGamesPlayed: Int!
        duelWins: Int!
        user: User!
        userId: String!
    }

    type AuthData {
        id: String!
        token: String!
        expiresIn: String!
    }
`

export default typeDefs;