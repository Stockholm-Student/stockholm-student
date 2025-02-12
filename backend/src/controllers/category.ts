import { Request, Response } from 'express'
import { CategoryModel } from '../models/category'

export const postCategory = async (req: Request, res: Response) => {
  try {
    const newCategory = new CategoryModel(req.body)
    await newCategory.save()
    res.json({ msg: 'success', data: newCategory })
  } catch (error) {
    res.status(500).send(error)
  }
}
export const getOneCategory = async (req: Request, res: Response) => {
  try {
    res.json({
      msg: 'success',
      data: await CategoryModel.findOne({ name: req.params.name }),
    })
  } catch (error) {
    res.json({ msg: 'error', data: String(error) })
  }
}
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    res.json({ msg: 'success', data: await CategoryModel.find() })
  } catch (error) {
    res.json({ msg: 'error', data: String(error) })
  }
}
