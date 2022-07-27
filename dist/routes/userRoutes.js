"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const jwt_1 = require("../middlewares/jwt");
exports.userRouter = (0, express_1.Router)();
exports.userRouter
    .post("/", userControllers_1.addUser)
    .post("/login", userControllers_1.userLogin)
    .patch("/:id", jwt_1.jwtVerify, userControllers_1.updateUser)
    .delete("/:id", jwt_1.jwtVerify, userControllers_1.deleteUser);
