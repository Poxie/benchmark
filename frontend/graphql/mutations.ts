import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
            id
            username
        }
    }
`

export const CREATE_SCORE = gql`
    mutation createScore($userId: String!, $gameId: String!, $score: Int!) {
        createScore(userId: $userId, gameId: $gameId, score: $score) {
            score
        }
    }
`

export const UPDATE_USER = gql`
    mutation updateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            id
            username
        }
    }
`