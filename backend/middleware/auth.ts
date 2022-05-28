import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { AuthData } from "../schema/types";

export type RequestAuth = {
    userId?: string;
    auth: boolean;
}
export type ExtendedRequest = Request & RequestAuth;

const direct = (req: ExtendedRequest, next: NextFunction) => {
    req.auth = false;
    return next();
}
export default function(req: ExtendedRequest, res: Response, next: NextFunction) {
    const authHeader = req.get('Authorization');
    if(!authHeader) return direct(req, next);

    const token = authHeader.split(' ')[1];
    if(!token) return direct(req, next);

    let decodedToken = {} as AuthData;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY as jwt.Secret) as AuthData;
    } catch(error) {
        return direct(req, next);
    }
    if(!decodedToken) return direct(req, next);

    req.auth = true;
    req.userId = decodedToken.id;
    next();
}