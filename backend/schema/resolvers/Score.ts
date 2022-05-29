import { Users } from "../../entities/Users"
import { Score as ScoreType } from '../types';

export const Score = {
    user: ({ userId }: ScoreType) => {
        const user = Users.findOneBy({ id: userId });
        return user;
    }
}