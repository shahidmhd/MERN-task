import mongoose from 'mongoose';

// Define a schema for the data
const monthDataSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create the model based on the schema
const MonthData = mongoose.model('MonthData', monthDataSchema);

export default MonthData;
