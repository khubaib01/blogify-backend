import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export function jwtVerify(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    const token = authorization?.split(" ")[1];
    const decoded = jwt.verify(String(token), String(process.env.JWT_SECRET));
    const { userId }: any = decoded;
    req.userId = userId;
    next();
  } catch {
    next("authentication failure");
  }
}
