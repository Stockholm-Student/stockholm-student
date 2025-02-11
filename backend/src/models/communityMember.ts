import mongoose, { Document } from 'mongoose'

export interface ICommunityMember extends Document {
  userId: mongoose.Schema.Types.UUID,
  communityId: mongoose.Schema.Types.UUID,
  joinedAt: Date,

  // from relations
  roles: string[],
}


export const CommunityMemberModel = mongoose.model<ICommunityMember>(
  'CommunityMember', // name of collection
  new mongoose.Schema<ICommunityMember>({
    userId: {
      type: mongoose.Schema.Types.UUID,
      ref: 'User',
      required: true,
    },
    communityId: {
      type: mongoose.Schema.Types.UUID,
      ref: 'Community',
      required: true,
    },
    joinedAt: {
      type: Date,
      default: Date.now,
    },

    // from relations
    roles: {
      type: [String],
      ref: 'Role',
      required: true,
      default: [],
    },
  })
)
