import { Scores } from "../../../entities/Scores";
import { Score, ScoreExtended } from "../../types";
import { GetGameLeaderboard, GetUserHighScore, GetUserScores } from "./types";

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

export const GET_GAME_LEADERBOARD: GetGameLeaderboard = async (_, { gameId }) => {
    const scores = await Scores.find({
        where: {
            gameId
        },
        order: {
            score: 'DESC'
        },
        take: 50
    });

    const filteredScores: ScoreExtended[] = [];
    for(let i = 0; i < scores.length; i++) {
        const score = scores[i];

        // Making sure duplicate users aren't on the leaderboard
        if(!filteredScores.find(s => s.userId === score.userId)) {
            filteredScores.push({
                ...score,
                
                // Determining leaderboard position
                position: filteredScores.length + 1
            });
        }
    }

    return filteredScores;
}