import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express, {Response, Request} from "express";
import { routing } from "./routes/routing";
import cors from 'cors'

dotenv.config();

const app = express();
const ENV_PORT = process.env.ENV_PORT || 5000;
const ENV_DOMAIN = process.env.ENV_DOMAIN || `http://localhost:${ENV_PORT}`




// * mongoose docs: https://mongoosejs.com/docs/async-await.html
// Enhanced MongoDB connection with better logging
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack-app';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Connection Successful!');
    console.log(`📦 Connected to database: ${mongoose.connection.name}`);
    console.log(`🌐 Database host: ${mongoose.connection.host}`);
    console.log(`🔌 Database port: ${mongoose.connection.port}`);
  })
  .catch((error) => {
    console.error('❌ MongoDB Connection Error:');
    console.error('Error details:', error);
    process.exit(1);
  });

// Monitor database connection
mongoose.connection.on('disconnected', () => {
  console.log('❌ MongoDB Disconnected');
});

mongoose.connection.on('error', (error) => {
  console.error('❌ MongoDB Error:', error);
});




app.use(cors({ origin: [ENV_DOMAIN] }))
app.use(express.json())
app.use(routing)




app.route('*').get((_, res: Response) => {res.send(`<h1>404 - Nothing here</h1>\n<p>Try <a href=\"${ENV_DOMAIN}/api/public/events\">${ENV_DOMAIN}/api/public/events</a> instead<p>`)})




app.listen(ENV_PORT, () => {
  console.log(`🔗 API URL: ${ENV_DOMAIN}`);
  // console.log(`💉 Health check: http://localhost:${ENV_PORT}/health`);
});
