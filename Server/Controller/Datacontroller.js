import MonthData from "../Model.js/Monthdata.js";

export const getAllData = async (req, res) => {
  try {
    const data = await MonthData.find();
    res.status(200).json({ success: true, message: 'Data fetched successfully', data });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const addData = async (req, res) => {
  try {
    const { month, quantity, price } = req.body;
    const newData = new MonthData({ month, quantity, price });
    await newData.save();
    res.status(201).json({ success: true, message: 'Data added successfully', data: newData });
  } catch (error) {
    console.error(`Error adding data: ${error}`);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const editData = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedData = await MonthData.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, message: 'Data updated successfully', data: updatedData });
  } catch (error) {
    console.error(`Error updating data: ${error}`);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await MonthData.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Data deleted successfully', data: deletedData });
  } catch (error) {
    console.error(`Error deleting data: ${error}`);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

