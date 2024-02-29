// import React from 'react'

// function Table() {
//     const data=[{
        
//     }]
//   return (
   
// <div class="w-full">

// 	<div class="flex flex-col">
//     <div class="overflow-x-auto shadow-md sm:rounded-lg">
//         <div class="inline-block min-w-full align-middle">
//             <div class="overflow-hidden ">
//                 <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
//                     <thead class="bg-gray-200 dark:bg-gray-700">
//                         <tr>
                            
//                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 id
//                             </th>
//                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 month
//                             </th>
//                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 quantity
//                             </th>
//                             <th scope="col" class="p-4">
//                                 <span class="sr-only">Edit</span>
//                             </th>
//                             <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
//                                 price
//                             </th>
                           
//                         </tr>
//                     </thead>
//                     <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
//                         <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">jan</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
//                             <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                                 <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                             </td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
                            
//                         </tr>
//                         <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">jan</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
//                             <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                                 <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                             </td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
                            
//                         </tr>
//                         <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">jan</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
//                             <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                                 <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                             </td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
                            
//                         </tr>
//                         <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">jan</td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
//                             <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
//                                 <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                             </td>
//                             <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">1999</td>
                            
//                         </tr>
                        
                        
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

function Table() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    { id: 1, month: 'Jan', quantity: 10, price: 20 },
    { id: 2, month: 'Feb', quantity: 20, price: 30 },
    { id: 3, month: 'Mar', quantity: 30, price: 10 },
    { id: 4, month: 'Apr', quantity: 20, price: 90 },
    { id: 5, month: 'May', quantity: 50, price: 70 },
    { id: 6, month: 'Jun', quantity: 10, price: 50 },
    { id: 7, month: 'Jul', quantity: 100, price: 100 },
    { id: 8, month: 'Aug', quantity: 30, price: 10 },
    // Add more data here
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(tableData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead class="bg-gray-200 dark:bg-gray-700">
                        <tr>
                            
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                id
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                month
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                quantity
                            </th>
                            <th scope="col" class="p-4">
                                <span class="sr-only">Edit</span>
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                price
                            </th>
                           
                        </tr>
                    </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {currentItems.map((row) => (
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.id}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{row.month}</td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.quantity}</td>
                    <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{row.price}</td>
                    
                </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination mt-4">
        <ul className="flex space-x-2 justify-center">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`border p-2 ${
                  currentPage === number ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Table;
