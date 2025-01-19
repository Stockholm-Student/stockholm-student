
import mongoose from "mongoose";

export const CommunityModel = mongoose.model(
  "Community", // name of collection
  new mongoose.Schema({
    communityId: {
      type: String,
      default: mongoose.Schema.Types.UUID,
      unique: true,
      required: true,
    },
    name: {
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
    // logo: {
    //   type: String,
    //   default: '', // Store the logo as a URL or file path
    // },
    // status: {
    //   type: String,
    //   enum: ['public', 'invite', 'hidden', 'closed', 'inactive'],
    //   default: 'public',
    // },


    // from relations
    categories: {
      type: [String],
      ref: "Category",
      required: true,
    },
    status: {
      type: String,
      ref: "CommunityStatus",
      required: true,
    },
    socialLinks: {
      type: [mongoose.Schema.Types.UUID],
      ref: "SocialLink",
      required: false,
      default: [],
    },
    // add image
  })
);
