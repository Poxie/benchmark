import { Users } from "../../../entities/Users"
import { GetUserByUsername } from "./types";

export const GET_ALL_USERS = () => {
    return Users.find();
}
export const GET_USER_BY_USERNAME: GetUserByUsername = async (_, { username }) => {
    // Fetching user by username
    return await Users.findOneBy({ username });
}