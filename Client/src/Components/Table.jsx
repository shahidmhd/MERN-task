// import React from 'react'
// import { useDataContext } from '../pages/DataProvider';

// function Table() {
//  const { data, updateData } = useDataContext();
//   console.log(data,"tt"); 
//   return (
   
// <div className="w-full">

// 	<div className="flex flex-col">
//     <div className="overflow-x-auto shadow-md sm:rounded-lg">
//         <div className="inline-block min-w-full align-middle">
//             <div className="overflow-hidden ">
//                 <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
//                     <thead className="bg-gray-200 dark:bg-gray-700">
//                         <tr>
                            
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 id
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 month
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 quantity
//                             </th>
//                             <th scope="col" className="p-4">
//                                 <span className="sr-only">Edit</span>
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 price
//                             </th>
                           
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//                     {data && data.map((item, index) => (
//   <tr key={item.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
//     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.id} </td>
//     <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{item.month} </td>
//     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.quantity} </td>
//     <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//       <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//     </td>
//     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.price} </td>
//   </tr>
// ))}

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     </div>
// </div>
// </div>
//   )
// }

// export default Table
import React, { useState } from 'react';
import { useDataContext } from '../pages/DataProvider';
import { editQuantity } from '../api/monthdatas';

function Table() {
  const { data, updateData } = useDataContext();
  const itemsPerPage = 5; // Set the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [editedItemId, setEditedItemId] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState('');

  // Other existing code...

  const handleEditClick = (itemId, quantity) => {
    setEditedItemId(itemId);
    setEditedQuantity(quantity.toString());
  };

  const handleSaveEdit = async () => {
    try {
     const newdata= await editQuantity(editedItemId, parseInt(editedQuantity, 10));
    console.log(newdata,"response");
     if(newdata.success){
      const updatedData = data.map(item =>
        item._id === editedItemId ? { ...item, quantity: parseInt(editedQuantity, 10) } : item
      );

      updateData(updatedData);
  
      setEditedItemId(null);
      setEditedQuantity('');
     }
    } catch (error) {
      // Handle error
      console.error('Error saving edited quantity:', error);
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const renderPagination = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className="pagination mt-4">
       
        <ul className="flex space-x-2 justify-center">
        <button
          onClick={handlePrevPage}
          className="border p-2 hover:bg-blue-200"
          disabled={currentPage === 1}
        >
          Prev
        </button>
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => handlePageChange(number)}
                className={`border p-2 ${
                  currentPage === number ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
           <button
          onClick={handleNextPage}
          className="border p-2 hover:bg-blue-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        </ul>
       
      </div>
    );
  };
  

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-200 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                id
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                month
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                quantity
                            </th>
                            <th scope="col" className="p-4">
                                <span className="sr-only">Edit</span>
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                price
                            </th>
                           
                        </tr>
                    </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {paginatedData.map((item, index) => (
  <tr key={item._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.id}
    </td>
    <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
      {item.month}
    </td>
    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {editedItemId === item._id ? (
        <input
          type="number"
          value={editedQuantity}
          onChange={(e) => setEditedQuantity(e.target.value)}
        />
      ) : (
        item.quantity
      )}
    </td>
    <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
      {editedItemId === item._id ? (
        <button
          className="text-blue-600 dark:text-blue-500 hover:underline"
          onClick={handleSaveEdit}
        >
          Save
        </button>
      ) : (
        <button
          className="text-blue-600 dark:text-blue-500 hover:underline"
          onClick={() => handleEditClick(item._id, item.quantity)}
        >
          Edit
        </button>
      )}
    </td>
    <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {item.price}
    </td>
  </tr>
))}

                </tbody>
              </table>
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

// import React, { useState } from 'react';

// function Table() {
//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);

//   const tableData = [
//     { id: 1, month: 'Jan', quantity: 10, price: 20 },
//     { id: 2, month: 'Feb', quantity: 20, price: 30 },
//     { id: 3, month: 'Mar', quantity: 30, price: 10 },
//     { id: 4, month: 'Apr', quantity: 20, price: 90 },
//     { id: 5, month: 'May', quantity: 50, price: 70 },
//     { id: 6, month: 'Jun', quantity: 10, price: 50 },
//     { id: 7, month: 'Jul', quantity: 100, price: 100 },
//     { id: 8, month: 'Aug', quantity: 30, price: 10 },
//     // Add more data here
//   ];


//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(tableData.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <div classNameName="w-full">
//       <div classNameName="flex flex-col">
//         <div classNameName="overflow-x-auto shadow-md sm:rounded-lg">
//           <div classNameName="inline-block min-w-full align-middle">
//             <div classNameName="overflow-hidden">
//               <table classNameName="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
//               <thead className="bg-gray-200 dark:bg-gray-700">
//                         <tr>
                            
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 id
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 month
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 quantity
//                             </th>
//                             <th scope="col" className="p-4">
//                                 <span className="sr-only">Edit</span>
//                             </th>
//                             <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 price
//                             </th>
                           
//                         </tr>
//                     </thead>
//                 <tbody classNameName="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//                   {currentItems.map((row) => (
//                     <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
//                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.id}</td>
//                     <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{row.month}</td>
//                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.quantity}</td>
//                     <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                         <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                     <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.price}</td>
                    
//                 </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div classNameName="pagination mt-4">
//         <ul classNameName="flex space-x-2 justify-center">
//           {pageNumbers.map((number) => (
//             <li key={number}>
//               <button
//                 onClick={() => paginate(number)}
//                 classNameName={`border p-2 ${
//                   currentPage === number ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
//                 }`}
//               >
//                 {number}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Table;
