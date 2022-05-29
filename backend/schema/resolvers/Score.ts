import { Users } from "../../entities/Users"

export const Score = {
    user: ({ userId }: any) => {
        const user = Users.findOneBy({ id: userId });
        return user;
    }
}