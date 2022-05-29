import { CREATE_SCORE } from "./mutations/Scores";
import { CREATE_USER } from "./mutations/User";
import { GET_USER_HIGH_SCORE, GET_USER_SCORES } from "./queries/Scores";
import { GET_ALL_USERS, GET_ME, GET_USER_BY_USERNAME, LOGIN } from "./queries/User";

const resolvers = {
    Query: {
        getUsers: GET_ALL_USERS,
        getUserByUsername: GET_USER_BY_USERNAME,
        login: LOGIN,
        getMe: GET_ME,
        getUserHighScore: GET_USER_HIGH_SCORE,
        getUserScores: GET_USER_SCORES
    },
    Mutation: {
        createUser: CREATE_USER,
        createScore: CREATE_SCORE
    }
}

export default resolvers;