"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("./routes/userRoutes");
const postRoutes_1 = require("./routes/postRoutes");
const connect_1 = require("./connect");
const PORT = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/users", userRoutes_1.userRouter);
app.use("/api/posts", postRoutes_1.postRouter);
app.get("/", (req, res) => {
    res.send("OK");
});
app.listen(PORT, async () => {
    await (0, connect_1.connectDB)().catch((err) => console.log(err));
});
