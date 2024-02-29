// DataContext.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getalldata } from '../api/monthdatas';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getalldata();
      if(data.success){
        setData(data.data)
      }else{
        setData([])
      }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
