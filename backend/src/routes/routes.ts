import { Router } from "express";
const router = Router();

import {
    getUsers, signupUser, deleteUser,
    putUser, getUser,
    signinUser, getProfileForUser} from '../controllers/userControllers';

import { TokenValidation } from "../middleware/validToken";

/**
 * Routes for http://localhost:3333/api/auth/
 */

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.get("/profile", TokenValidation, getProfileForUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);

export default router;
