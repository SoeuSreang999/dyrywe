// server/utils/db.js
import mongoose from 'mongoose';
import { useRuntimeConfig } from '#imports';

export default async function connectDB() {
  const config = useRuntimeConfig();

  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return;
  }

  mongoose.connection.once('connected', () => {
    console.log('Successfully connected to MongoDB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
  });

  return mongoose.connect(process.env.MONGODB_URL)
  .then((response) => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
  
}
