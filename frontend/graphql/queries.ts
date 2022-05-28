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
        id
        username
        name
    }
`