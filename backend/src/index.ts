import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/items';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/fullstack-app';

app.use(cors());
app.use(express.json());

// Enhanced MongoDB connection with better logging
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

// Basic route to test API
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    dbConnection: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    timestamp: new Date()
  });
});

// Routes
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 API URL: http://localhost:${PORT}`);
  console.log(`💉 Health check: http://localhost:${PORT}/health`);
});