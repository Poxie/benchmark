import { Games } from "../../entities/Games";
import { Users } from "../../entities/Users"

type Parent = {
    userId: string;
    gameId: string;
}
export const ProfileOverview = {
    user: async ({ userId }: Parent) => {
        const user = await Users.findOneBy({ id: userId });
        return user;
    }
}