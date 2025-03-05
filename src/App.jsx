import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Recipes_Explore } from "./pages/Explores/Recipes_Exp";
import { Restaurants_Explore } from "./pages/Explores/Restaurants_Exp"; 
import { Main_Explore } from "./pages/Explores/Main_Exp"; 
import { Navbar } from "./components/Navbar";
import { RecipePost } from "./pages/RecipePost";
import { RecipePost1 } from "./pages/RecipePost1";
import { RecipePost2 } from "./pages/RecipePost2";
import { RecipePost3 } from "./pages/RecipePost3";
import { RecipePost4 } from "./pages/RecipePost4";
import { RecipePost5 } from "./pages/RecipePost5";
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
            <Route path="/recipe_post" element={<RecipePost />} /> 
            <Route path="/recipe_post1" element={<RecipePost1 />} /> 
            <Route path="/recipe_post2" element={<RecipePost2 />} /> 
            <Route path="/recipe_post3" element={<RecipePost3 />} /> 
            <Route path="/recipe_post4" element={<RecipePost4 />} /> 
            <Route path="/recipe_post5" element={<RecipePost5 />} /> 
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
