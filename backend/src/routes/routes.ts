import { Router } from "express";
const router = Router();

import { getUsers, signupUser, deleteUser, putUser, getUser} from '../controllers/userControllers';

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/signup", signupUser);
router.put("/users/:id", putUser);
router.delete("/users/:id", deleteUser);

export default router;
