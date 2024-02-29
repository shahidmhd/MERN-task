
import React from 'react';


const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col p-5 lg:flex-row justify-between items-center lg:items-start">
        {/* Left side */}
        <div className="flex flex-row gap-2">
          <h3 className='text-2xl font-semibold'>Good Morning ! </h3>
          <span>
            <img src="Assets/Sun With Face.svg" alt="" className="w-8 h-8" />
          </span>
        </div>

        {/* Right side */}
        <div class="py-2 px-2 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
          
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-sm text-black font-semibold flex items-center justify-center">
               Jhon Doe
              </p>
              <p class="text-slate-500 flex items-center justify-center">
                Jhon@gmail.com
              </p>
            </div>
          
          </div>
          <img class="block mx-auto h-12 rounded-md sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/img/erin-lindford.jpg" alt="Woman's Face" />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
