import mongoose from 'mongoose'

export const RoleModel = mongoose.model(
  'Role', // name of collection
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
)
