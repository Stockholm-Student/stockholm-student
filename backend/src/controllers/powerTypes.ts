import { Request, Response } from 'express';
import { } from '../models/user';
import { dbConnection } from '../db/dbConnect';
import { CountryModel, UniversityModel } from '../models/powerTypes';


const connection = dbConnection


export const getOneUniversity = async (req: Request, res: Response) => {
  try {
    res.json({ msg: "success", data: await UniversityModel.findOne({name: req.params.name})})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
export const getAllUniversities = async (req: Request, res: Response) => {
  try {
    res.json({ msg: "success", data: await UniversityModel.find()})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
export const postUniversity = async(req: Request, res: Response) => {
  try {
    const newUniversity = new UniversityModel(req.body);
    await newUniversity.save();
    res.json({ msg: "success", data: newUniversity })
  } catch (error) {
    res.status(500).send(error);
  }
}


export const getOneCountry = async (req: Request, res: Response) => {
  try {
    res.json({ msg: "success", data: await CountryModel.findOne({name: req.params.name})})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
export const getAllCountries = async (req: Request, res: Response) => {
  try {
    res.json({ msg: "success", data: await CountryModel.find()})
  } catch (error) {
    res.json({ msg: "error", data: String(error)} )
  }
}
export const postCountry = async(req: Request, res: Response) => {
  try {
    const newUniversity = new CountryModel(req.body);
    await newUniversity.save();
    res.json({ msg: "success", data: newUniversity })
  } catch (error) {
    res.status(500).send(error);
  }
}
