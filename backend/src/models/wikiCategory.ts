import mongoose from "mongoose";

export const WikiCategoryModel = mongoose.model(
  "WikiCategory", // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
  })
);