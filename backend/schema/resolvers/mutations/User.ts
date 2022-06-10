import { Users } from "../../../entities/Users";
import bcrypt from 'bcrypt';
import { UpdateUser } from "./types";
import { comparePasswords } from "../queries/User";
import { User } from "../../types";

const encryptPassword = async (password: string) => {
    const hash = await bcrypt.hash(password, 12);
    return hash;
}

export const CREATE_USER = async (_: any, { username, password, name }: any) => {
    // Checking if username is available
    if((await Users.find({ where: { username } })).length) throw new Error('Username already in use.');

    // Other requirements
    if(username.length < 3) throw new Error('Username must be at least 3 characters.');
    if(password.length < 5) throw new Error('Password must be at least 5 characters.');

    // Creating user
    const user = Users.create({ name, username, password: await encryptPassword(password) });
    return user.save();
}

export const UPDATE_USER: UpdateUser = async (_: any, { input }, { userId }) => {
    const { id, currentPassword, newPassword } = input;

    // Checking if logged in user is same as user being updated
    if(id !== userId) throw new Error('Unauthorized.');

    const user = await Users.findOneBy({ id });
    if(!user) throw new Error('User does not exist.');

    // Updating user password
    if(currentPassword && newPassword) {
        const match = await comparePasswords(currentPassword, user.password);

        if(match) {
            user.password = await encryptPassword(newPassword);
        } else {
            throw new Error('Password does not match.');
        }
    }

    // Updating other properties
    delete input.currentPassword;
    delete input.newPassword;

    Object.entries(input).forEach(([property, value]) => {
        if(value) {
            user[property as keyof User] = value;
        }
    })

    // Updating user
    user.save();

    return user;
}