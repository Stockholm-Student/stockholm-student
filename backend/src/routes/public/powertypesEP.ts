import express, { Request, Response } from 'express';
import { getAllCountries, getAllUniversities, getOneCountry, getOneUniversity, postCountry, postUniversity } from '../../controllers/powerTypes';


export const publicPowerTypesEP = express.Router();

publicPowerTypesEP.route('/university')
  .post(postUniversity)
  .get(getAllUniversities)

publicPowerTypesEP.route('/university/:name')
  .get(getOneUniversity)

publicPowerTypesEP.route('/country')
  .post(postCountry)
  .get(getAllCountries)

publicPowerTypesEP.route('/country/:name')
  .get(getOneCountry)
  