import { Router } from "express";
import {
  addPost,
  deletePost,
  updatePost,
} from "../controllers/postControllers";
import { jwtVerify } from "../middlewares/jwt";

export const postRouter = Router();

postRouter
  .post("/", jwtVerify, addPost)
  .patch("/:id", jwtVerify, updatePost)
  .delete("/:id", jwtVerify, deletePost);
