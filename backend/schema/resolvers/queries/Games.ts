import { Games } from "../../../entities/Games"

export const GET_GAMES = () => {
    const games = Games.find();
    return games;
}