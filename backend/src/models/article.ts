import mongoose from "mongoose";

export const ArticleModel = mongoose.model(
  "Article", // name of collection
  new mongoose.Schema({
    articleId: {
      type: String,
      default: mongoose.Schema.Types.UUID,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },


    // from relations
    authorId: {
      type: mongoose.Schema.Types.UUID,
      ref: "User",
      required: true,
    },
    wikiCategories: {
      type: [String],
      ref: "wikiCategory",
      required: true,
    }
}))