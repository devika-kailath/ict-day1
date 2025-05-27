import { useState } from 'react'

import './App.css'
import First from './components/First'
import Reg from './components/Reg'
import DataTable from './components/DataTable'
import DataCard from './components/DataCard'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
<Navbar></Navbar>
<Routes>
   <Route path="/" element={<First/>}/>
   <Route path="/r" element={<Reg/>}/>
   <Route path="/t" element={<DataCard/>}/>
   <Route path="/c" element={<DataTable/>}/>
</Routes>
    </>
  )
}

export default App
