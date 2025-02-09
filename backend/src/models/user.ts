import mongoose from 'mongoose'
import { CountryModel, UniversityModel } from './powerTypes'
import { RoleModel } from './role'
import { EventModel } from './event'
import { ArticleModel } from './article'
import { CategoryModel } from './category'
import {
  validateDocumentOneRef,
  validateDocumentRefList,
} from '../db/schemaValidation'

const UserSchema = new mongoose.Schema({
  userId: {
    // type: String,
    // default: mongoose.Schema.Types.UUID,
    type: mongoose.Schema.Types.UUID,
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
    ref: 'Role',
    required: false,
    default: [],
  },
  bookmarkedEvents: {
    type: [mongoose.Schema.Types.UUID],
    ref: 'Event',
    required: false,
    default: [],
  },
  bookmarkedWikiArticles: {
    type: [mongoose.Schema.Types.UUID],
    ref: 'Article',
    required: false,
    default: [],
  },
  interests: {
    type: [String],
    ref: 'Category',
    required: false,
    default: [],
  },
  country: {
    type: String,
    ref: 'Country',
    required: false,
    default: 'Not entered',
  },
  university: {
    type: String,
    ref: 'University',
    required: true,
  },
})

UserSchema.pre('save', async function (next) {
  try {
    await Promise.all([
      validateDocumentOneRef(this.country, CountryModel, {
        name: this.country,
      }),
      validateDocumentOneRef(this.university, UniversityModel, {
        name: this.university,
      }),

      validateDocumentRefList(this.roles, RoleModel, (role) => {
        return { name: role }
      }),
      validateDocumentRefList(this.bookmarkedEvents, EventModel, (uuid) => {
        return { eventId: uuid }
      }),
      validateDocumentRefList(
        this.bookmarkedWikiArticles,
        ArticleModel,
        (uuid) => {
          return { articleId: uuid }
        }
      ),
      validateDocumentRefList(this.interests, CategoryModel, (category) => {
        return { name: category }
      }),
    ])
  } catch (err) {
    next(err as mongoose.CallbackError)
  }
})

export const UserModel = mongoose.model(
  'User', // name of collection
  UserSchema
)
