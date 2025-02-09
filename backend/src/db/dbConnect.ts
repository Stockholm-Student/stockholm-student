import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const dbConnection = (async () => {
  if (!process.env.DB_CONNECT_STR) process.exit(1)

  console.log('Connecting...')

  // await mongoose.connect(process.env.DB_CONNECT_STR)
  await mongoose
    .connect(process.env.DB_NEW_CONNECT_STR || '')
    .then(() => {
      console.log('✅ MongoDB Connection Successful!')
      console.log(`📦 Connected to database: ${mongoose.connection.name}`)
      console.log(`🌐 Database host: ${mongoose.connection.host}`)
      console.log(`🔌 Database port: ${mongoose.connection.port}`)
    })
    .catch((error) => {
      console.error('❌ MongoDB Connection Error:')
      console.error('Error details:', error)
      process.exit(1)
    })

  // Monitor database connection
  mongoose.connection.on('disconnected', () => {
    console.log('❌ MongoDB Disconnected')
  })

  mongoose.connection.on('error', (error) => {
    console.error('❌ MongoDB Error:', error)
  })

  return mongoose.connection
})()
