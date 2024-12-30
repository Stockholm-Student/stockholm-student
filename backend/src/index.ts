import mongoose from 'mongoose';
import express, {Response, Request} from "express";
import { routing } from "./routes/routing";
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.ENV_PORT || 5000;
const domain = process.env.ENV_DOMAIN || `http://localhost:${port}`



app.use(cors(/** { origin: [domain] } */))
app.use(express.json())
app.use(routing)



app.route('*').get((_, res: Response) => {res.send(`<h1>404 - Nothing here</h1>\n<p>Try <a href=\"${domain}/api/public/events\">${domain}/api/public/events</a> instead<p>`)})



app.listen(port, () => {
  console.log(`🔗 API URL: ${domain}`);
});
