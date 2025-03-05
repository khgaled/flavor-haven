import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Recipes_Explore } from "./pages/Explores/Recipes_Exp";
import { Restaurants_Explore } from "./pages/Explores/Restaurants_Exp"; 
import { Main_Explore } from "./pages/Explores/Main_Exp"; 
import { User_Blog } from "./pages/Blog";
import {User_Blog2} from "./pages/Toast_Blogs/Blog2"
import {User_Blog3} from "./pages/Toast_Blogs/Blog3"
import {User_Blog4} from "./pages/Toast_Blogs/Blog4"
import {New_Post} from "./pages/NewPost"
import {New_Post2} from "./pages/NewPosts/NewPost2"
import {New_Post3} from "./pages/NewPosts/NewPost3"
import {New_Post4} from "./pages/NewPosts/NewPost4"
import { Profile } from "./pages/Profile"; 
import { Navbar } from "./components/Navbar";
import { RecipePost } from "./pages/Recipes/RecipePost";
import { RecipePost1 } from "./pages/Recipes/RecipePost1";
import { RecipePost2 } from "./pages/Recipes/RecipePost2";
import { RecipePost3 } from "./pages/Recipes/RecipePost3";
import { RecipePost4 } from "./pages/Recipes/RecipePost4";
import { RecipePost5 } from "./pages/Recipes/RecipePost5";
import { RestaurantPost } from "./pages/Restaurants/RestaurantPost";
import { RestaurantPost1 } from "./pages/Restaurants/RestaurantPost1";
import { RestaurantPost2 } from "./pages/Restaurants/RestaurantPost2";
import { RestaurantPost3 } from "./pages/Restaurants/RestaurantPost3";
import { RestaurantPost4 } from "./pages/Restaurants/RestaurantPost4";
import { RestaurantPost5 } from "./pages/Restaurants/RestaurantPost5";
import { RestaurantPost6 } from "./pages/Restaurants/RestaurantPost6";
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
            <Route path="/user_blog" element={<User_Blog />} />
            <Route path="/user_blog2" element={<User_Blog2 />} />
            <Route path="/user_blog3" element={<User_Blog3 />} />
            <Route path="/user_blog4" element={<User_Blog4 />} />
            <Route path="/new_post" element={<New_Post />} />
            <Route path="/new_post2" element={<New_Post2 />} />
            <Route path="/new_post3" element={<New_Post3 />} />
            <Route path="/new_post4" element={<New_Post4 />} />
            <Route path="/profile" element={<Profile />} /> 
            <Route path="/recipe_post" element={<RecipePost />} /> 
            <Route path="/recipe_post1" element={<RecipePost1 />} /> 
            <Route path="/recipe_post2" element={<RecipePost2 />} /> 
            <Route path="/recipe_post3" element={<RecipePost3 />} /> 
            <Route path="/recipe_post4" element={<RecipePost4 />} /> 
            <Route path="/recipe_post5" element={<RecipePost5 />} /> 
            <Route path="/restaurant_post" element={<RestaurantPost />} /> 
            <Route path="/restaurant_post1" element={<RestaurantPost1 />} /> 
            <Route path="/restaurant_post2" element={<RestaurantPost2 />} /> 
            <Route path="/restaurant_post3" element={<RestaurantPost3 />} /> 
            <Route path="/restaurant_post4" element={<RestaurantPost4 />} /> 
            <Route path="/restaurant_post5" element={<RestaurantPost5 />} /> 
            <Route path="/restaurant_post6" element={<RestaurantPost6 />} />  
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
