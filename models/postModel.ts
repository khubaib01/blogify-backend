import mongoose, { Schema, model } from "mongoose";

interface IPost {
  title: string;
  content: string;
  tags?: string[];
  likes?: number;
  dislikes?: number;
  private?: boolean;
  writtenBy: mongoose.Types.ObjectId;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
    private: {
      type: Boolean,
      default: false,
    },
    writtenBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>("Post", postSchema);
