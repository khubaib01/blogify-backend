import express, { Request, Response } from "express";
import cors from "cors";
import { userRouter } from "./routes/userRoutes";
import { postRouter } from "./routes/postRoutes";
import { connectDB } from "./connect";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(PORT, async () => {
  await connectDB().catch((err) => console.log(err));
});
