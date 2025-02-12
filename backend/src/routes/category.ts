import express from 'express'
import {
  getAllCategories,
  getOneCategory,
  postCategory,
} from '../controllers/category'

export const categoriesEndpoints = express.Router()

categoriesEndpoints
  .route('/categories')
  .get(getAllCategories)
  .post(postCategory)

categoriesEndpoints.route('/categories/:id').get(getOneCategory)
