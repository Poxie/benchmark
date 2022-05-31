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

    // Checking if score is new highscore
    const highestScore = await Scores.findOne({
        where: {
            gameId
        },
        order: {
            score: 'DESC'
        }
    })
    // If is new highscore, update properties
    if(highestScore && highestScore.score as number > score) {
        scoreObj.isHighscore = true;
        highestScore.isHighscore = false;
        highestScore.save();
    } else if(!highestScore) {
        // If there are no previous scores, set as highscore
        scoreObj.isHighscore = true;
    }

    // Saving and returning score
    return scoreObj.save();
}