import { Types } from 'mongoose'
import { Role } from './types'

//interfaces for the different mongodb collections

export interface Event {
  _id?: Types.ObjectId | number //remove number/ only for testing until db ready
  title: string
  start: Date
  end?: Date
  imageUrl: string
  location: string
  categories: string[]
  description: string
}

export interface User {
  _id: Types.ObjectId
  email: string
  password: string
  userName: string
  bio: string
  university?: string
  country?: string
  createdAt: Date
  interests: string[]
  saves: Types.ObjectId[]
  permissions: [Types.ObjectId, Role][]
}

export interface Organization {
  _id: Types.ObjectId
  members: User['_id'][]
  logo: string
  description: string
  categories: string[]
  events: Types.ObjectId[]
  createdAt: Date
  links: string[]
  type: 0 | 1 | 2 | 3
  // 0 (public), visible to all, joinable by all
  // 1 (invite only), visible all, join invite only
  // 2 (hidden), visible only to orga owner
  // 3 (closed), visible only in database/admins
}

export interface WikiArticle {
  _id: Types.ObjectId
  title: string
  content: string
  categories: string[]
  authorId: User['_id']
  createdAt: Date
  updatedAt: Date
  isPublished: boolean
}
