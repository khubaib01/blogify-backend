import { Request, Response } from "express";
import { ZPostObject } from "../middlewares/zod";
import { Post } from "../models/postModel";

export const addPost = async (req: Request, res: Response) => {
  req.body.writtenBy = req.userId;
  const zodResponse = ZPostObject.safeParse(req.body);
  if (zodResponse.success) {
    try {
      await Post.create(req.body);
      res.json({ status: "ok" });
    } catch {
      res.json({ status: "error2" });
    }
  } else {
    res.json({ status: "error1" });
  }
};
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ status: "ok" });
  } catch {
    res.json({ status: "error" });
  }
};
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndDelete({ _id: id });
    res.json({ status: "ok" });
  } catch {
    res.json({ status: "error" });
  }
};
