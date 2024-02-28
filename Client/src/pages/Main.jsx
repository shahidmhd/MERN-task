import React from 'react'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'




function Main() {
  return (
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar/>
        <Home/>
        </div>
  )
}

export default Main