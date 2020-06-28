import { Request, Response} from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../entity/User'; //Entity User

/**
 * getUsers is a function that returns all users.
 */

export const getUsers = async(req: Request, resp: Response): Promise<Response> => {
    try{
        const users = await getRepository(User).find();
        return resp.json(users);
    }catch(erro){
        return resp.json(erro);
    }
};

/**
 * getUser is a function that returns one user by her id.
 */

export const getUser = async (req: Request,res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
};

/**
 * signupUser is a function that creates a new user in
 * the database and generates a token for it.
 */

export const signupUser = async(req: Request, resp: Response): Promise<Response> => {

    //Get new user by the body of request
    const newUser:User = req.body;
    newUser.points = 0;

    try {
        //Ensures that the username is not repeated
        const isDuplicade = await getRepository(User).findOne({username: newUser.username});
        if(isDuplicade){
            return resp.status(400).json({mensage: "This user already exists."});
        }

        //Generates the salt and encrypts the user's password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        //Create and save the user
        const user = await getRepository(User).create(newUser);
        const userSaved = await getRepository(User).save(user);

        //Create the token
        const token:string = jwt.sign({id: userSaved.id}, process.env.SECRET_KEY || "contrate-me", {
            expiresIn: 60 * 60,
        });

        return resp.header('Bearer-token', token).json(userSaved);
    }catch(erro){
        return resp.status(400).json({mensage: "Something went wrong"})
    }
};

/**
 * Checks user information and generates a token for him
 */
export const signinUser = async (req:Request, resp:Response):Promise<Response> => {

    //Checks user

    const reqUser = req.body;
    const user = await getRepository(User).findOne({username: reqUser.username});
    if(!user) return resp.status(400).json({mensage: "Email or password invalid"});
    const isValidPassword = await bcrypt.compare(user.password, user.password);
    if(!isValidPassword) return resp.status(400).json({mensage: "Email or password invalid"});

    //Generate token

    const token:string = jwt.sign({id: user.id}, process.env.SECRET_KEY || "contrate-me", {
        expiresIn: 60 * 60,
    })

    return resp.header('Bearer-token', token).json({token,user})
}

/**
 * Modify a user by her id
*/

export const putUser = async (req: Request,res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);

    if (!user) return res.json({msg: 'Not user found'});

    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
};

/**
 * Delete a user by her id
*/

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const deletedUser = await getRepository(User).delete(req.params.id);
    return res.json(deletedUser);
};

/**
 * Get the information of a logged user
*/

export const getProfileForUser = async (req: Request, resp: Response) => {
    const user = await getRepository(User).findOne({id: req.userId});

    if(!user){
        return resp.status(400).json({mensage: "User not found."});
    }

    return resp.json(user);

}
