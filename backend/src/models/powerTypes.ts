import mongoose from "mongoose";

export const UniversityModel = mongoose.model(
  "University", // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
}))


export const CountryModel = mongoose.model(
  "Country", // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
}))


export const CommunityStatus = mongoose.model(
  "CommunityStatus", // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
}))
