import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Login  from './pages/Login'
import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/main_explore" element={<Main_Explore />} />
          <Route path="/restaurant_explore" element={<Restaurant_Explore />} />
          <Route path="/recipes_explore" element={<Recipes_Explore />} /> */}
        </Routes>
    </>
  )
}

export default App
