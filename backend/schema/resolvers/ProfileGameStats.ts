import { Games } from "../../entities/Games";
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
    }
}