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
        const scores = await Scores.findBy({ gameId });

        let ranking = 0;
        const prevIds: string[] = [];
        for(let i = 0; i < scores.length; i++) {
            const score = scores[i];

            // Making sure duplicate users aren't on the leaderboard
            if(!prevIds.includes(score.userId)) {
                ranking++;

                // If score for user is found, break loop
                if(score.userId === userId) break;

                // Else push score to prevIds
                prevIds.push(score.userId);
            }
        }
        return ranking;
    }
}