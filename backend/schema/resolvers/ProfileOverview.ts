import { Games } from "../../entities/Games";
import { Users } from "../../entities/Users"

type Parent = {
    userId: string;
    gameId: string;
}
export const ProfileOverview = {
    user: ({ userId }: Parent) => {
        const user = Users.findOneBy({ id: userId });
        return user;
    }
}