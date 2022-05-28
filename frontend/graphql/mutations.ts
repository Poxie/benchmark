import { gql } from '@apollo/client';

export const CREATE = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(username: $username, password: $password) {
            id
            username
        }
    }
`