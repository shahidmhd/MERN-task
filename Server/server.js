import express from 'express';
import connectDB from './config/db.js';
import routes from './routes/Userroutes.js';

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Use the routes
app.use('/api', routes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
