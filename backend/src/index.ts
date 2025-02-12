import express, { Response } from 'express'
import { routing } from './routes/_routing'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnection } from './db/dbConnect'

dotenv.config()

const app = express()
const port = process.env.ENV_PORT || 5000
const domain = process.env.ENV_DOMAIN || `http://localhost:${port}`

dbConnection.then(() => {
  app.use(cors(/** { origin: [domain] } */))
  app.use(express.json())
  app.use(routing)

  app.route('*').get((_, res: Response) => {
    res.send(
      `<h1>404 - Nothing here</h1>\n<p>Try <a href="${domain}/api/public/events">${domain}/api/public/events</a> instead<p>`
    )
  })

  app.listen(port, () => {
    console.log(`🔗 API URL: ${domain}/api`)
  })
})
