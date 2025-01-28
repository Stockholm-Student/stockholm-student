import express, { Request, Response } from 'express';
import { getAllCountries, getAllUniversities, getOneCountry, getOneUniversity, postCountry, postUniversity } from '../../../controllers/done/powerTypes';


export const publicUniversities = express.Router();
export const publicCountries = express.Router();

publicUniversities.route('/universities')
  .post(postUniversity)
  .get(getAllUniversities)

publicUniversities.route('/universities/:name')
  .get(getOneUniversity)

publicCountries.route('/countries')
  .post(postCountry)
  .get(getAllCountries)

publicCountries.route('/countries/:name')
  .get(getOneCountry)
  