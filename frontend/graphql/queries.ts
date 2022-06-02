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

export const GET_PROFILE_BY_USERNAME = gql`
    query getProfileOverview($username: String!) {
        getProfileOverview(username: $username) {
            user {
                id
                username
                name
            }
            highScores {
                score
                game {
                    id
                    title
                }
            }
            totalScore
            differentGamesPlayed
            duelWins
        }
    }
`
export const GET_PROFILE_GAME_STATS = gql`
    query getProfileGameStats($userId: String!, $gameId: String!) {
        getProfileGameStats(userId: $userId, gameId: $gameId) {
            gameId
            gamesPlayed
            highScore {
                score
            }
            game {
                title
            }
            scores {
                score
            }
        }
    }
`