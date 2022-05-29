import { gql } from '@apollo/client';

export const LOGIN = gql`
    query login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
        }
    }
`
export const GET_ME = gql`
    query getMe {
        getMe {
            id
            username
            name
        }
    }
`

export const GET_GAME_LEADERBOARD = gql`
    query getGameLeaderboard($gameId: String!) {
        getGameLeaderboard(gameId: $gameId) {
            position
            score
            user {
                id
                username
            }
        }
    }
`