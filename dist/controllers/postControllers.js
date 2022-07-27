"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.addPost = void 0;
const zod_1 = require("../middlewares/zod");
const postModel_1 = require("../models/postModel");
const addPost = async (req, res) => {
    req.body.writtenBy = req.userId;
    const zodResponse = zod_1.ZPostObject.safeParse(req.body);
    if (zodResponse.success) {
        try {
            await postModel_1.Post.create(req.body);
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
exports.addPost = addPost;
const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postModel_1.Post.findByIdAndUpdate({ _id: id }, req.body);
        res.json({ status: "ok" });
    }
    catch {
        res.json({ status: "error" });
    }
};
exports.updatePost = updatePost;
const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await postModel_1.Post.findByIdAndDelete({ _id: id });
        res.json({ status: "ok" });
    }
    catch {
        res.json({ status: "error" });
    }
};
exports.deletePost = deletePost;
