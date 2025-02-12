import express from 'express'
import { getAllUsers, getOneUser, postUser } from '../controllers/user'

export const usersEndpoints = express.Router()

usersEndpoints.route('/users').post(postUser).get(getAllUsers)

usersEndpoints.route('/users/:userId').get(getOneUser)
