"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtVerify = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function jwtVerify(req, res, next) {
    const { authorization } = req.headers;
    try {
        const token = authorization?.split(" ")[1];
        const decoded = jsonwebtoken_1.default.verify(String(token), String(process.env.JWT_SECRET));
        const { userId } = decoded;
        req.userId = userId;
        next();
    }
    catch {
        next("authentication failure");
    }
}
exports.jwtVerify = jwtVerify;
