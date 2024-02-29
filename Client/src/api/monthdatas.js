// api.js

import instance from "./axiosinstance";


export const getalldata = async () => {
  try {
    const response = await instance.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle the error in the component calling this function
  }
};


export const editQuantity = async (id, newQuantity) => {
    try {
        console.log(id,newQuantity,"rrrrrrrrrrrrrrr");
      const response = await instance.patch(`/data/${id}`, { quantity: newQuantity });
      return response.data;
    } catch (error) {
      console.error('Error editing quantity:', error);
      throw error;
    }
  };