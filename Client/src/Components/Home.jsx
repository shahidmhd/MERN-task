import React from 'react'
import Dashboard from './Dashboard'
import Linechart from './Linechart'
import Table from './Table'
import Card from './Card'

function Home() {
  return (
    <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in p-5">
      <Dashboard />
      <Linechart />
      <div className="flex flex-col lg:flex-row gap-4 p-5">
        <Table />
        <Card />
      </div>
    
    </main>
  )
}

export default Home
