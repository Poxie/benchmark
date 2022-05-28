import { CREATE_USER } from "./mutations/User";
import { GET_ALL_USERS, GET_USER_BY_USERNAME } from "./queries/User";

const resolvers = {
    Query: {
        getUsers: GET_ALL_USERS,
        getUserByUsername: GET_USER_BY_USERNAME
    },
    Mutation: {
        createUser: CREATE_USER
    }
}

export default resolvers;