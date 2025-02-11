import { Router } from 'express'
import { eventEndpoints } from './event'
import { categoriesEndpoints } from './category'
import { usersEndpoints } from './user'
import { countriesEndpoints, universitiesEndpoints } from './powerTypes'
import { authEndpoints } from './auth'

export const routing = Router()

routing.use(
  '/api',
  categoriesEndpoints,
  eventEndpoints,
  usersEndpoints,
  universitiesEndpoints,
  countriesEndpoints,
  authEndpoints
)
