import { CREATE_SCORE } from "./mutations/Scores";
import { CREATE_USER } from "./mutations/User";
import { ProfileOverview } from "./ProfileOverview";
import { GET_GAME_LEADERBOARD, GET_USER_HIGH_SCORE, GET_USER_SCORES } from "./queries/Scores";
import { GET_ALL_USERS, GET_ME, GET_USER_BY_USERNAME, LOGIN, GET_PROFILE_OVERVIEW } from "./queries/User";
import { Score } from "./Score";

const resolvers = {
    Query: {
        getUsers: GET_ALL_USERS,
        getUserByUsername: GET_USER_BY_USERNAME,
        login: LOGIN,
        getMe: GET_ME,
        getUserHighScore: GET_USER_HIGH_SCORE,
        getUserScores: GET_USER_SCORES,
        getGameLeaderboard: GET_GAME_LEADERBOARD,
        getProfileOverview: GET_PROFILE_OVERVIEW
    },
    Mutation: {
        createUser: CREATE_USER,
        createScore: CREATE_SCORE
    },
    HighScore: Score,
    Score,
    ProfileOverview
}

export default resolvers;