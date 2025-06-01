import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import AddTask from './components/AddTask';


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<AddTask />} />
     </Routes>
    </>

    
  )
}

export default App
