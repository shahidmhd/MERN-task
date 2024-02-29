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
  const { quantity } = req.body; // Extract only the quantity from the request body

  try {
    // Find the document by ID and update the quantity field
    const updatedData = await MonthData.findByIdAndUpdate(
      id,
      { $set: { quantity } }, // Use $set to update only the specified field
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).json({ success: false, message: 'Data not found' });
    }

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

export const getAllDatapagination = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalItems = await MonthData.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const data = await MonthData.find().skip(startIndex).limit(limit);

    res.status(200).json({
      success: true,
      message: 'Data fetched successfully',
      data,
      page,
      totalPages,
      totalItems,
    });
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
