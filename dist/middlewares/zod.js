"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZPostObject = exports.ZUserObject = exports.ZLoginObject = void 0;
const zod_1 = require("zod");
exports.ZLoginObject = zod_1.z.object({
    email: zod_1.z.string().email("Need Email"),
    password: zod_1.z.string(),
});
exports.ZUserObject = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email("Need Email"),
    password: zod_1.z.string(),
    avatar: zod_1.z.string().optional(),
});
exports.ZPostObject = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    tags: zod_1.z.string().array().optional(),
    private: zod_1.z.boolean().optional(),
    writtenBy: zod_1.z.string(),
});
