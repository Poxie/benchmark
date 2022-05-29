import { Scores } from "../../../entities/Scores";
import { GetUserHighScore, GetUserScores } from "./types";

export const GET_USER_HIGH_SCORE: GetUserHighScore = async (_, { id, gameId }) => {
    const score = await Scores.findOne({
        where: {
            userId: id,
            gameId
        },
        order: {
            score: 'DESC'
        }
    });

    return score;
}
export const GET_USER_SCORES: GetUserScores = async (_, { id, gameId }) => {
    const scores = await Scores.find({
        where: {
            userId: id,
            gameId
        },
        order: {
            score: 'DESC'
        }
    });
    
    return scores;
}