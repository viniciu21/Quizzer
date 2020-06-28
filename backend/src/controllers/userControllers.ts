import { Request, Response, response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../entity/User';

export const getUsers = async(req: Request, resp: Response): Promise<Response> => {
    try{
        const users = await getRepository(User).find();
        return resp.json(users);
    }catch(erro){
        return resp.json(erro);
    }
};

export const getUser = async (req: Request,res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
};

export const signupUser = async(req: Request, resp: Response): Promise<Response> => {
    const newUser:User = req.body;
    newUser.points = 0;

    try {
        const isDuplicade = await getRepository(User).findOne({username: newUser.username});

        if(isDuplicade){
            console.log('entrou aqui ');
            return resp.status(400).json({mensage: "This user already exists."});
        }

        const salt = await bcrypt.genSalt(10);

        newUser.password = await bcrypt.hash(newUser.password, salt);

        const user = await getRepository(User).create(newUser);
        const userSaved = await getRepository(User).save(user);
        const token:string = jwt.sign({id: userSaved.id}, process.env.SECRET_KEY || "contrate-me", {
            expiresIn: 60 * 60,
        });
        return resp.header('Bearer-token', token).json(userSaved);
    }catch(erro){
        return resp.status(400).json({mensage: "Something went wrong"})
    }
};

export const signinUser = async (req:Request, resp:Response):Promise<Response> => {
    const user = req.body;
    const isValidUsername = await getRepository(User).findOne({username: user.username});
    if(!isValidUsername) return resp.status(400).json({mensage: "Email or password invalid"});
    const isValidPassword = await bcrypt.compare(user.password, isValidUsername.password);
    if(!isValidPassword) return resp.status(400).json({mensage: "Email or password invalid"});

    //Generate token

    const token:string = jwt.sign({id: isValidUsername.id}, process.env.SECRET_KEY || "contrate-me", {
        expiresIn: 60 * 60,
    })

    return resp.header('Bearer-token', token).json({token,isValidUsername})
}

export const putUser = async (req: Request,res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);

    if (!user) return res.json({msg: 'Not user found'});

    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  };

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const deletedUser = await getRepository(User).delete(req.params.id);
    return res.json(deletedUser);
};

export const getProfileForUser = async (req: Request, resp: Response) => {
    const user = await getRepository(User).findOne({id: req.userId});

    if(!user){
        return resp.status(400).json({mensage: "User not found."});
    }

    return resp.json(user);

}
