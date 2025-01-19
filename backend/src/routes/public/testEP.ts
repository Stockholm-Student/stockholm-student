import express, { Request, Response } from 'express';
import { dbConnection } from '../../db/dbConnect';


const connection = dbConnection

export const publicTestEP = express.Router();

publicTestEP.route('/health')
  .get(async (_, res) => {
    res.json({
      status: 'ok',
      dbConnection: (await dbConnection).readyState === 1 ? 'connected' : 'disconnected',
      timestamp: new Date()
    });
  });
