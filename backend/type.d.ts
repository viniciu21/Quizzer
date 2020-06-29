//for req.userID in middleware/validToken.ts

declare namespace Express {
    export interface Request {
        userId: number;
    }
}
