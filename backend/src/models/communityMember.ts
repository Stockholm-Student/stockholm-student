import mongoose from "mongoose";

export const CommunityMemberModel = mongoose.model(
  "CommunityMember", // name of collection
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.UUID,
      ref: "User",
      required: true,
    },
    communityId: {
      type: mongoose.Schema.Types.UUID,
      ref: "Community",
      required: true,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },

    // from relations
    roles: {
      type: [String],
      ref: "Role",
      required: true,
      default: []
    }
  })
);
