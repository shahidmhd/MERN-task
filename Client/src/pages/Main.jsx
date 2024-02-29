import React from 'react'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'
import { DataProvider } from './DataProvider'

function Main() {
  return (
    <DataProvider>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />
        <Home />
      </div>
    </DataProvider>
  )
}

export default Main