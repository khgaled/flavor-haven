import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login }  from './pages/Login'
import { Recipes_Explore } from './pages/Explores/Recipes_Exp';
import { Navbar } from './components/Navbar';
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && <Navbar />}
      <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/recipes_explore" element={<Recipes_Explore />} />
          {/* <Route path="/main_explore" element={<Main_Explore />} />
          <Route path="/restaurant_explore" element={<Restaurant_Explore />} />
           */}
        </Routes>
    </>
  )
}

export default App
