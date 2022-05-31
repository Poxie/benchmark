import { Games } from "../../entities/Games";
import { Users } from "../../entities/Users"
import { Score as ScoreType } from '../types';

export const Score = {
    user: async ({ userId }: ScoreType) => {
        const user = await Users.findOneBy({ id: userId });
        return user;
    },
    game: async ({ gameId }: ScoreType) => {
        const game = await Games.findOneBy({ id: gameId });
        console.log(game?.title);
        return game;
    }
}