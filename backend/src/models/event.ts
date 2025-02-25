import mongoose from 'mongoose'
import {
  validateDocumentOneRef,
  validateDocumentRefList,
} from '../db/schemaValidation'
import { CommunityModel } from './community'
import { CategoryModel } from './category'
import { UserModel } from './user'

const EventSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.UUID,
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
    required: false,
    default: null,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: false,
    default: null,
  },
  location: {
    type: JSON,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },

  // from relations
  creatorId: {
    type: mongoose.Schema.Types.UUID,
    ref: 'User',
    required: true,
  },
  communityId: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Community',
    required: false,
    default: null,
  },
  categories: {
    type: [String],
    ref: 'Category',
    required: false,
  },
  // add image
})

EventSchema.pre('save', async function (next) {
  try {
    await Promise.all([
      validateDocumentOneRef(this.communityId, CommunityModel, {
        communityId: this.communityId,
      }),
      validateDocumentOneRef(this.creatorId, UserModel, {
        userId: this.creatorId,
      }),
      validateDocumentRefList(this.categories, CategoryModel, (category) => {
        return { name: category }
      }),
    ])
  } catch (err) {
    next(err as mongoose.CallbackError)
  }
})

export const EventModel = mongoose.model(
  'Event', // name of collection
  EventSchema
)
