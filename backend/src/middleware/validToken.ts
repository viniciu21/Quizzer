import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';



interface Payload{ //payload type
    id: number,
    iat: number,
    exp: number
};

/**
 * This middleware recive the token and return the id of user.
*/

export const TokenValidation = (req: Request, resp:Response, next: NextFunction) => {
    try {
        const Bearertoken = req.header("Authorization");

        const token = Bearertoken?.split(" ");

        if(!token) {return resp.status(400).json(new Error("Acess deneied"));}
        const payload = jwt.verify(token[1], process.env.SECRET_KEY || "contrate-me") as Payload;

        req.userId = payload.id;
        console.log(req.userId);
        next();
    }catch(error){
        return resp.status(400).json(error);
    }
};
