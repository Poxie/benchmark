import { CREATE_SCORE } from "./mutations/Scores";
import { CREATE_USER, UPDATE_USER } from "./mutations/User";
import { ProfileGameStats } from "./ProfileGameStats";
import { ProfileOverview } from "./ProfileOverview";
import { GET_GAMES } from "./queries/Games";
import { GET_GAME_LEADERBOARD, GET_USER_HIGH_SCORE, GET_USER_SCORES } from "./queries/Scores";
import { GET_ALL_USERS, GET_ME, GET_USER_BY_USERNAME, LOGIN, GET_PROFILE_OVERVIEW, GET_PROFILE_GAME_STATS } from "./queries/User";
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
        getProfileOverview: GET_PROFILE_OVERVIEW,
        getProfileGameStats: GET_PROFILE_GAME_STATS,
        getGames: GET_GAMES
    },
    Mutation: {
        createUser: CREATE_USER,
        createScore: CREATE_SCORE,
        updateUser: UPDATE_USER
    },
    HighScore: Score,
    Score,
    ProfileOverview,
    ProfileGameStats
}

export default resolvers;