import mongoose, { Schema } from "mongoose";


export const UserModel = mongoose.model(
  "User", // name of collection
  new mongoose.Schema({
    userId: {
      type: String,
      default: mongoose.Schema.Types.UUID,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    hashedPwd: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },


    // from relations
    roles: {
      type: [String],
      ref: "Role",
      required: false,
      default: [],
    },
    bookmarkedEvents: {
      type: [mongoose.Schema.Types.UUID],
      ref: "Event",
      required: false,
      default: [],
    },
    bookmarkedWikiArticles: {
      type: [mongoose.Schema.Types.UUID],
      ref: "Article",
      required: false,
      default: [],
    },
    interests: {
      type: [String],
      ref: "Category",
      required: false,
      default: []
    },
    country: {
      type: String,
      ref: "Country",
      required: false,
      default: "Not entered"
    },
    university: {
      type: String,
      ref: "University",
      required: true,
    }
  })
);
