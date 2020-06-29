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
        const token = req.header("Bearer-token");
        console.log(token);

        if(!token) {return resp.status(400).json({mensage: "Access Denied"});}
        const payload = jwt.verify(token, process.env.SECRET_KEY || "contrate-me") as Payload;

        req.userId = payload.id;

        next();
    }catch(error){
        return resp.status(400).json(error);
    }
};
