import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../entity/User';

export const getUsers = async(req: Request, resp: Response): Promise<Response> => {
    try{
        const users = await getRepository(User).find();
        console.log('funfo');
        return resp.json(users);
    }catch(erro){
        return resp.json(erro);
    }
};

export const getUser = async (req: Request,res: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return res.json(results);
};

export const postUser = async(req: Request, resp: Response): Promise<Response> => {
    const newUser = req.body;
    console.log(newUser);
    const user = getRepository(User).create(newUser);
    const userSaved = await getRepository(User).save(user);

    return resp.json(userSaved);
};

export const putUser = async (req: Request,res: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);
    if (user) {
      getRepository(User).merge(user, req.body);
      const results = await getRepository(User).save(user);
      return res.json(results);
    }
  
    return res.json({msg: 'Not user found'});
  };

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const deletedUser = await getRepository(User).delete(req.params.id);
    return res.json(deletedUser);
};