import { Users } from "../../../entities/Users"
import { GetMe, GetProfileOverview, GetUserByUsername, Login } from "./types";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { Scores } from "../../../entities/Scores";
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
export const GET_ME: GetMe = async (_, __, { userId }) => {
    // Checking if user is logged in
    if(!userId) throw new Error('User is not logged in.');

    // Fetching user
    const user = await Users.findOneBy({ id: userId });

    return user;
}

// Profile
export const GET_PROFILE_OVERVIEW: GetProfileOverview = async (_, { userId, username }) => {
    // If fetch by username
    if(!userId && username) {
        userId = (await Users.findOneBy({ username }))?.id as string;
    }
    if(!userId) return null;

    // Getting user highscores
    const highScores = await Scores.find({
        where: {
            isHighscore: true,
            userId
        },
        order: {
            score: 'DESC'
        }
    });

    // Determining overview property values
    const totalScore = highScores.map(score => typeof score.score === 'string' ? parseInt(score.score) : score.score).reduce((partial, a) => partial + a, 0);
    const differentGamesPlayed = highScores.length;

    // Hard-coded for now until duels are implemented
    const duelWins = 0;
    
    return {
        userId,
        highScores,
        differentGamesPlayed,
        duelWins,
        totalScore,
    };
}