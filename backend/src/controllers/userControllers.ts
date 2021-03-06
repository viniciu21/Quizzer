import { Request, Response, json } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../entity/User'; //Entity User
import { format } from 'path';

/**
 * getUsers is a function that returns all users.
 */

export const getUsers = async (req: Request, resp: Response): Promise<Response> => {
    try {
        const users = await getRepository(User).find();
        return resp.json(users);
    } catch (erro) {
        return resp.json(erro);
    }
};

/**
 * getUser is a function that returns one user by her id.
 */

export const getUser = async (req: Request, resp: Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);
    return resp.json(results);
};

/**
 * signupUser is a function that creates a new user in
 * the database and generates a token for it.
 */

export const signupUser = async (req: Request, resp: Response): Promise<Response> => {

    //Get new user by the body of request
    const newUser: User = req.body;
    newUser.points = 0;
    newUser.time = 0;
    newUser.easy = 0;
    newUser.medium = 0;
    newUser.hard = 0;

    try {
        //Ensures that the username is not repeated
        const isDuplicade = await getRepository(User).findOne({ username: newUser.username });
        if (isDuplicade || newUser.username === '' || newUser.password === '') {
            return resp.status(400).json({ mensage: "Erro ao cadrastar" });
        }

        //Generates the salt and encrypts the user's password
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);

        //Create and save the user
        const userCreate = await getRepository(User).create(newUser);
        const user: User = await getRepository(User).save(userCreate);

        //Create the token
        const token: string = jwt.sign({ id: user.id }, process.env.SECRET_KEY || "contrate-me", {
            expiresIn: 60 * 60,
        });

        return resp.header('Bearer', token).json({ token, user });
    } catch (erro) {
        return resp.status(400).json({ mensage: "Something went wrong" })
    }
};

/**
 * Checks user information and generates a token for him
 */
export const signinUser = async (req: Request, resp: Response): Promise<Response> => {

    //Checks user

    const reqUser = req.body;
    const user = await getRepository(User).findOne({ username: req.body.username });
    if (!user) {
        return resp.status(400).json({ mensage: "Email or password invalid" })
    };
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) return resp.status(400).json({ mensage: "Email or password invalid" });

    //Generate token

    const token: string = jwt.sign({ id: user.id }, process.env.SECRET_KEY || "contrate-me", {
        expiresIn: 60 * 60,
    })

    return resp.header('Bearer', token).json({ token, user })
}

/**
 * Modify a user by her id
*/

export const putUser = async (req: Request, resp: Response): Promise<Response> => {
    const user = await getRepository(User).findOne(req.params.id);

    if (!user) return resp.json({ msg: 'Not user found' });

    const duplicatedUsername = await getRepository(User).find({ username: req.body.username });

    if (duplicatedUsername.length !== 0) return resp.status(400).json({
        mensage: "There is already a user with that username"
    })

    if (user.username === req.body.username) return resp.status(400).json({
        mensage: "Enter a different username"
    })

    const password = req.body.password;

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);

    getRepository(User).merge(user, {
        username: req.body.username,
        password: hashPassword,
        points: req.body.points
    });
    const results = await getRepository(User).save(user);
    return resp.json(results);
};

/**
 * Delete a user by her id
*/

export const deleteUser = async (req: Request, resp: Response): Promise<Response> => {
    const deletedUser = await getRepository(User).delete(req.params.id);
    return resp.json(deletedUser);
};

/**
 * Get the information of a logged user
*/

export const getProfileForUser = async (req: Request, resp: Response) => {
    const user = await getRepository(User).findOne({ id: req.userId });

    if (!user) {
        return resp.status(400).json({ mensage: "User not found." });
    }

    return resp.json(user);
}

interface RequiredUser {
    id: number,
    points: number,
    time: number,
    hard: number,
    medium: number,
    easy: number;
}

/**
 * Put a Points into Users.
 */

export const putPointIntoUsers = async (req: Request, resp: Response) => {
    const userRequired: RequiredUser = req.body;

    const user = await getRepository(User).findOne({ id: userRequired.id });

    if (!user) return resp.status(400).json({ mensage: "Something has going wrong" });

    const newPoints = userRequired.points + user.points;

    const newHard = userRequired.hard + user.hard;

    const newMedium = userRequired.medium + user.medium;

    const newEasy = userRequired.easy + user.easy;

    if (user.time === 0) {
        const newTime = userRequired.time;
        await getRepository(User).merge(user, {
            points: newPoints,
            time: newTime,
            hard: newHard,
            medium: newMedium,
            easy: newEasy
        });

        const results = await getRepository(User).save(user);

        return resp.json(results);

    }

    const newMediaTime = Math.ceil((userRequired.time + user.time) / 2);

    getRepository(User).merge(user, {
        points: newPoints,
        time: newMediaTime,
        hard: newHard,
        medium: newMedium,
        easy: newEasy,
    });

    const results = await getRepository(User).save(user);

    return resp.json(results);
}
