import { Games } from "../../entities/Games";
import { Scores } from "../../entities/Scores";
import { Users } from "../../entities/Users"

type Parent = {
    userId: string;
    gameId: string;
}
export const ProfileGameStats = {
    user: async ({ userId }: Parent) => {
        const user = await Users.findOneBy({ id: userId });
        return user;
    },
    game: async ({ gameId }: Parent) => {
        const game = await Games.findOneBy({ id: gameId });
        return game;
    },
    lastPlayed: async ({ gameId, userId }: Parent) => {
        const scores = await Scores.findOne({
            where: { userId, gameId },
            order: { timestamp: 'DESC' }
        });
        return scores?.timestamp;
    },
    latestScore: async ({ gameId, userId }: Parent) => {
        const scores = await Scores.findOne({
            where: { userId, gameId },
            order: { timestamp: 'DESC' }
        });
        return scores?.score;
    },
    averageScore: async ({ gameId, userId }: Parent) => {
        const scores = await Scores.findBy({ gameId, userId });
        if(!scores.length) return null;

        const totalScore = scores.map(s => parseInt(s.score)).reduce((a,b) => a + b, 0);
        const average = (totalScore / scores.length).toFixed(1);
        return average;
    }
}