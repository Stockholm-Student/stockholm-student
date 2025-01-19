import mongoose from "mongoose";
  
export const EventModel = mongoose.model(
  "Event", // name of collection
  new mongoose.Schema({
    eventId: {
      type: mongoose.Schema.Types.UUID,
      required: true,
    },
    creatorId: {
      type: mongoose.Schema.Types.UUID,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: true,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: false,
      
    },
    location: {
      type: JSON,
      required: true,
    },
    IsPublished: {
      type: Boolean,
      required: true,
    },

    // from relations
    community: {
      type: mongoose.Schema.Types.UUID,
      ref: "Community",
      required: false,
      default: "",
    },
    categories: {
      type: [mongoose.Schema.Types.UUID],
      ref: "Category",
      required: true,
    },
    // add image
  })
);
