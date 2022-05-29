import { Scores } from "../../../entities/Scores";
import { CreateScore } from "./types";

export const CREATE_SCORE: CreateScore = async (_, { userId, gameId, score }, { userId: loggedInUserId }) => {
    // Making sure updated user is logged
    if(userId !== loggedInUserId) throw new Error('Unauthorized.');

    // Creating score row
    const scoreObj = new Scores();
    scoreObj.score = score;
    scoreObj.gameId = gameId;
    scoreObj.userId = userId;

    // Saving and returning score
    return scoreObj.save();
}