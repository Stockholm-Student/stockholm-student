import mongoose from "mongoose";

export const CategoryModel = mongoose.model(
  "Category", // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    }
  })
);
