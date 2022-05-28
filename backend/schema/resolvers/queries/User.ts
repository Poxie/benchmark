import { Users } from "../../../entities/Users"
import { GetUserByUsername, Login } from "./types";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

// Comparing passwords
const comparePasswords = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}

// Fetching users
export const GET_ALL_USERS = () => {
    return Users.find();
}
export const GET_USER_BY_USERNAME: GetUserByUsername = async (_, { username }) => {
    // Fetching user by username
    return await Users.findOneBy({ username });
}

// Login
export const LOGIN: Login = async (_, { username, password }) => {
    // Checking if user exists
    const user = await Users.findOneBy({ username });
    if(!user) throw new Error('Incorrect credentials.');

    // Checking if passwords match
    if(!(await comparePasswords(password, user.password))) throw new Error('Incorrect credentials.');

    // Creating a token
    const id = user.id;
    const expiresIn = '7d';
    const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY as jwt.Secret, {
        expiresIn
    });

    return { id: user.id, token, expiresIn };
}