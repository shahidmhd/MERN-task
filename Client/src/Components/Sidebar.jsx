import React from 'react'


function Sidebar() {
  return (

   <>
        <aside
          class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-[#111b29]"
        >
          <div class="sidebar-header flex items-center justify-center py-4">
            <div class="inline-flex">
              <a href="#" class=" items-center">
                <img src="Assets/Briefcase.svg" alt="" srcset="" />
                <span class="leading-10 text-gray-100  font-bold  uppercase">statboard</span>
              </a>
            </div>
          </div>
          <div class="sidebar-content px-4 py-6">
            <ul class="flex flex-col w-full">
             
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </span>
                  <span class="ml-3">Manager</span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>
                  <span class="ml-3">Tasks</span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                  <span class="ml-3">Clients</span>
                  <span
                    class="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
                  >1k</span>
                </a>
              </li>
              <li class="my-px">
                <a
                  href="#"
                  class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <span class="flex items-center justify-center text-lg text-green-400">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span class="ml-3">Add new</span>
                </a>
              </li>
              <li class="my-px">
                <a
                 
                  class="flex flex-row items-center h-10 px-3 rounded-lg"
                >
                  
                   
                </a>
              </li>
              <li class="my-px">
                <a
               
                  class="flex flex-row items-center h-10 px-3 rounded-lg"
                >
                  
                   
                </a>
              </li>
              <li class="my-px">
                <a
                 
                  class="flex flex-row items-center h-10 px-3 rounded-lg"
                >
                  
                   
                </a>
              </li>
              <li class="my-px">
                <a
               
                  class="flex flex-row items-center h-10 px-3 rounded-lg "
                >
                  
                   
                </a>
              </li>
              <li class="my-px">
                <a
                 
                  class="flex flex-row items-center h-10 px-3 rounded-lg"
                >
                  
                   
                </a>
              </li>
            </ul>
          </div>
         
  <ul class="flex items-center justify-center bg-white mb-auto">
    <li>
      <a
        href="#"
        class="flex flex-row items-center h-10 px-3 rounded-lg text-red-500"
      >
        <span>Logout</span>
        <span class="flex items-center justify-center text-lg ml-3 text-red-400">
          <img src="Assets/Shutdown.svg" alt="" srcset="" />
        </span>
      </a>
    </li>
  </ul>


        </aside>
        
       </>
  
  )
}

export default Sidebar