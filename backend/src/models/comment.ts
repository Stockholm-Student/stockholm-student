
import mongoose from "mongoose";

export const CommentModel = mongoose.model(
  "Comment", // name of collection
  new mongoose.Schema({
    commentId: {
      type: String,
      default: mongoose.Schema.Types.UUID,
      unique: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      default: '',
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    isReply: {
      type: Boolean,
      default: false,
    },

    // from relations
    parentId: {
      type: mongoose.Schema.Types.UUID,
      ref: "Comment",
      required: false
    },
    creatorId: {
      type: mongoose.Schema.Types.UUID,
      ref: "User",
      required: true
    }
  })
);
