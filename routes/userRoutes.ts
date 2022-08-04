import { Router } from "express";
import {
  addUser,
  deleteUser,
  updateUser,
  userLogin,
} from "../controllers/userControllers";
import { jwtVerify } from "../middlewares/jwt";

export const userRouter = Router();

userRouter
  .post("/", addUser)
  .post("/login", userLogin)
  .patch("/:id", jwtVerify, updateUser)
  .delete("/:id", jwtVerify, deleteUser);
