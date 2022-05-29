import { Scores } from "../../../entities/Scores";
import { GetUserHighScore } from "./types";

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