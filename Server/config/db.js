// Import the 'mongoose' module
import mongoose from 'mongoose';

// Replace 'your_database_name' with the name of your local MongoDB database
const MONGODB_URI = 'mongodb+srv://shahidvk124:WGKnwuO6ev3C95N5@cluster0.v3xccnv.mongodb.net/adminpanel';

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
