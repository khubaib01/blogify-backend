import { Request, Response } from "express";
import { ZLoginObject, ZUserObject } from "../middlewares/zod";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addUser = async (req: Request, res: Response) => {
  const zodResponse = ZUserObject.safeParse(req.body);
  if (zodResponse.success) {
    try {
      await User.create(req.body);
      res.json({ status: "ok" });
    } catch {
      res.json({ status: "error2" });
    }
  } else {
    res.json({ status: "error1" });
  }
};
export const userLogin = async (req: Request, res: Response) => {
  const zodResponse = ZLoginObject.safeParse(req.body);
  if (zodResponse.success) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (isValidPassword) {
          const token = jwt.sign(
            { userId: user._id },
            String(process.env.JWT_SECRET),
            { expiresIn: "1h" }
          );
          res.json({ status: "ok", access_token: token });
        } else {
          res.json({ status: "error4" });
        }
      } else {
        res.json({ status: "error3" });
      }
    } catch {
      res.json({ status: "error2" });
    }
  } else {
    res.json({ status: "error1" });
  }
};
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await User.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ status: "ok" });
  } catch {
    res.json({ status: "error" });
  }
};
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete({ _id: id });
    res.json({ status: "ok" });
  } catch {
    res.json({ status: "error" });
  }
};
