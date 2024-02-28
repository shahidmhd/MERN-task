// import React from "react";
// import PieChart from "./Chart";
// import Table from "./Table";

// function Dashboard() {
//   return (
//     <>

//         {/* First section */}
//         <div className="flex flex-row gap-1 p-5 justify-between">
//           <h3 className="flex flex-row gap-2">
//             Good Morning !{" "}
//             <span>
//               <img src="Assets/Sun With Face.svg" alt="" srcSet="" />
//             </span>
//           </h3>

//           {/* Second section */}
//           <div class="bg-white shadow-xl rounded-lg flex">
//             <div class="p-2">
//               <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
//                 Joh Doe
//               </h3>
//               <div class="text-center text-gray-400 text-xs font-semibold">
//                 <p>john@example.com</p>
//               </div>
//             </div>
//             <div class="photo-wrapper p-2">
//               <img
//                 class="w-10 h-10 rounded-md mx-auto"
//                 src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
//                 alt="John Doe"
//               />
//             </div>
//           </div>
//         </div>
      
      

//     </>
//   );
// }

// export default Dashboard;
import React from 'react';
import Table from './Table';
import Card from './Card';
import Charts from './Charts';
import Linechart from './Linechart';

function Dashboard() {
  return (
    <>
    <div className="flex justify-between">
      {/* Left side */}
      <div className="flex flex-row gap-2">
        <h3>Good Morning ! </h3>
        <span>
          <img src="Assets/Sun With Face.svg" alt="" srcSet="" />
        </span>
      </div>

      {/* Right side */}
      <div class="bg-white shadow-xl rounded-lg flex">
            <div class="p-2">
              <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
                Joh Doe
              </h3>
              <div class="text-center text-gray-400 text-xs font-semibold">
                <p>john@example.com</p>
              </div>
            </div>
            <div class="photo-wrapper p-2">
              <img
                class="w-10 h-10 rounded-md mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
          </div>
    </div>
 {/* next component */}

 <Linechart/>
 
 <div className='flex flex-row gap-4 p-5'>
 <Table/>
   <Card/>
 </div>
    </>
  );
}

export default Dashboard;
