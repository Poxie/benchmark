import { Users } from "../../../entities/Users";
import bcrypt from 'bcrypt';

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