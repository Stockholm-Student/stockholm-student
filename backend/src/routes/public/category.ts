import express from 'express';
import { getAllCategories, getOneCategory, postCategory } from '../../controllers/category';


export const publicCategories = express.Router();

publicCategories.route('/categories')
  .get(getAllCategories)
  .post(postCategory)

publicCategories.route('/categories/:id')
  .get(getOneCategory)
