import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Register, PostForm } from ".";
import Login from "./Login";
import { getToken } from "../utils/localStorage.js";
import Posts from "./Posts";

function Main() {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const localToken = getToken();
    setToken(localToken);
  }, []);

  return (
    <div className="mainContainer" id="mainContainer">
      <Navbar  setToken={setToken} token={token} />
      <Routes>
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route
          path="/register"
          element={<Register setToken={setToken} token={token} />}
        />
        <Route
          path="/post"
          element={<PostForm token={token} posts={posts} setPosts={setPosts} />}
        />
        <Route path="*" element={<Posts posts={posts} setPosts={setPosts} token={token} />} />
      </Routes>
    </div>
  );
}

export default Main;
