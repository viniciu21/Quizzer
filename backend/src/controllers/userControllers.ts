import { Request, Response } from 'express';
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

    const isDuplicade = getRepository(User).findOne({username: newUser.username});

    if(isDuplicade) return resp.status(400).json({mensage: "This user already exists."});

    const salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(newUser.password, salt);

    const user = getRepository(User).create(newUser);
    const userSaved = await getRepository(User).save(user);

    return resp.status(200).json(userSaved).status(200).json({mensage: "user save with success"});
};

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
