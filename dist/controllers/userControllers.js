"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.userLogin = exports.addUser = void 0;
const zod_1 = require("../middlewares/zod");
const userModel_1 = require("../models/userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const addUser = async (req, res) => {
    const zodResponse = zod_1.ZUserObject.safeParse(req.body);
    if (zodResponse.success) {
        try {
            await userModel_1.User.create(req.body);
            res.json({ status: "ok" });
        }
        catch {
            res.json({ status: "error2" });
        }
    }
    else {
        res.json({ status: "error1" });
    }
};
exports.addUser = addUser;
const userLogin = async (req, res) => {
    const zodResponse = zod_1.ZLoginObject.safeParse(req.body);
    if (zodResponse.success) {
        try {
            const { email, password } = req.body;
            const user = await userModel_1.User.findOne({ email });
            if (user) {
                const isValidPassword = await bcrypt_1.default.compare(password, user.password);
                if (isValidPassword) {
                    const token = jsonwebtoken_1.default.sign({ userId: user._id }, String(process.env.JWT_SECRET), { expiresIn: "1h" });
                    res.json({ status: "ok", access_token: token });
                }
                else {
                    res.json({ status: "error4" });
                }
            }
            else {
                res.json({ status: "error3" });
            }
        }
        catch {
            res.json({ status: "error2" });
        }
    }
    else {
        res.json({ status: "error1" });
    }
};
exports.userLogin = userLogin;
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel_1.User.findByIdAndUpdate({ _id: id }, req.body);
        res.json({ status: "ok" });
    }
    catch {
        res.json({ status: "error" });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel_1.User.findByIdAndDelete({ _id: id });
        res.json({ status: "ok" });
    }
    catch {
        res.json({ status: "error" });
    }
};
exports.deleteUser = deleteUser;
