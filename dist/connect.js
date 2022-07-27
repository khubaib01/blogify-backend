"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const URI = `mongodb+srv://ignited:${process.env.DB_PASSWORD}@tamimscluster.b7ddp.mongodb.net/react-blogify?retryWrites=true&w=majority`;
async function connectDB() {
    if (mongoose_1.default.connection.readyState === 0) {
        try {
            await mongoose_1.default.connect(URI);
        }
        catch {
            console.log("Error");
        }
    }
    else {
        return;
    }
}
exports.connectDB = connectDB;
