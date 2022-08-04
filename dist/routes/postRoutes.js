"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postControllers_1 = require("../controllers/postControllers");
const jwt_1 = require("../middlewares/jwt");
exports.postRouter = (0, express_1.Router)();
exports.postRouter
    .post("/", jwt_1.jwtVerify, postControllers_1.addPost)
    .patch("/:id", jwt_1.jwtVerify, postControllers_1.updatePost)
    .delete("/:id", jwt_1.jwtVerify, postControllers_1.deletePost);
