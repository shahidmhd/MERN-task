// Import the 'mongoose' module
import mongoose from 'mongoose';

// Replace 'your_database_name' with the name of your local MongoDB database
const MONGODB_URI = 'mongodb://localhost:27017/your_database_name';

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};

export default connectDB;
