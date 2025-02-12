import mongoose from 'mongoose'

export const SocialLinkModel = mongoose.model(
  'SocialLink', // name of collection
  new mongoose.Schema({
    link: {
      type: String,
      required: true,
    },

    // from relations
    // icon
  })
)
