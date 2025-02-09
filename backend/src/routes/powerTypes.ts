import express, { Request, Response } from 'express';
import { getAllCountries, getAllUniversities, getOneCountry, getOneUniversity, postCountry, postUniversity } from '../controllers/powerTypes';


export const universitiesEndpoints = express.Router();
export const countriesEndpoints = express.Router();

universitiesEndpoints.route('/universities')
  .post(postUniversity)
  .get(getAllUniversities)

universitiesEndpoints.route('/universities/:name')
  .get(getOneUniversity)

countriesEndpoints.route('/countries')
  .post(postCountry)
  .get(getAllCountries)

countriesEndpoints.route('/countries/:name')
  .get(getOneCountry)
  