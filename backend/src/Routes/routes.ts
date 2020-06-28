import { Router } from "express";
const router = Router();

import { getUsers, postUser, deleteUser} from '../controllers/userControllers';

router.get("/users", getUsers);
// router.get("/users/:id", getUser);
router.post("/users", postUser);
// router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
