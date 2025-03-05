import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Recipes_Explore } from "./pages/Explores/Recipes_Exp";
import { Restaurants_Explore } from "./pages/Explores/Restaurants_Exp"; 
import { Main_Explore } from "./pages/Explores/Main_Exp"; 
import { Profile } from "./pages/Profile"; 
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/recipes_explore" element={<Recipes_Explore />} />
            <Route path="/restaurants_explore" element={<Restaurants_Explore />} /> 
            <Route path="/main_explore" element={<Main_Explore />} /> 
            <Route path="/profile" element={<Profile />} /> 
            <Route path="*" element={<Navigate to="/main_explore" />} /> 
          </>
        ) : (
          <>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
