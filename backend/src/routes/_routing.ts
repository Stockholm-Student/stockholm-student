import { Router } from 'express'
import { eventEndpoints } from './event'
import { categoriesEndpoints } from './category'
import { usersEndpoints } from './user'
import { countriesEndpoints, universitiesEndpoints } from './powerTypes'

export const routing = Router()

routing.use(
  '/api',
  categoriesEndpoints,
  eventEndpoints,
  usersEndpoints,
  universitiesEndpoints,
  countriesEndpoints
)
