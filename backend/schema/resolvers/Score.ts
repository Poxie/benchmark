import { Games } from "../../entities/Games";
import { Scores } from "../../entities/Scores";
import { Users } from "../../entities/Users"
import { Score as ScoreType, ScoreExtended } from '../types';

export const Score = {
    user: async ({ userId }: ScoreType) => {
        const user = await Users.findOneBy({ id: userId });
        return user;
    },
    game: async ({ gameId }: ScoreType) => {
        const game = await Games.findOneBy({ id: gameId });
        console.log(game?.title);
        return game;
    },
    ranking: async ({ gameId, userId }: ScoreType) => {
        // Fetching ordered scores
        const scores = await Scores.find({
            where: {
                gameId,
            },
            order: {
                score: 'DESC'
            }
        });

        // Finding user ranking
        let ranking = 1;
        for(const score of scores) {
            if(score.userId === userId) break;
            ranking++;
        }

        return ranking;
    }
}