import mongoose, { Document } from 'mongoose'
import {
  validateDocumentOneRef,
  validateDocumentRefList,
} from '../db/schemaValidation'
import { CommunityModel } from './community'
import { CategoryModel } from './category'
import { UserModel } from './user'


export interface IEvent extends Document {
  eventId: mongoose.Schema.Types.UUID,
  title: string,
  description: string,
  createdAt: Date,
  updatedAt: Date,
  start: Date,
  end: Date,
  location: JSON,
  isPublished: boolean,

  // from relations
  creatorId: mongoose.Schema.Types.UUID,
  community: mongoose.Schema.Types.UUID,
  categories: string[],
  // add image
}


const EventSchema = new mongoose.Schema<IEvent>({
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
  community: {
    type: mongoose.Schema.Types.UUID,
    ref: 'Community',
    required: false,
    default: null,
  },
  categories: {
    type: [String],
    ref: 'Category',
    required: true,
  },
  // add image
})

EventSchema.pre('save', async function (next) {
  try {
    await Promise.all([
      validateDocumentOneRef(this.community, CommunityModel, {
        communityId: this.community,
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

export const EventModel = mongoose.model<IEvent>(
  'Event', // name of collection
  EventSchema
)
