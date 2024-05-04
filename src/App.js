
import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar2 from "./Component/Navbar2";
import Signup from "./Component/authe/Signup";
import Login from "./Component/authe/Login";
import Postproject from "./Component/Postproject";


const App =()=> {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar2 />}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/post-project" element={<Postproject />} />

    </Routes>
    </>
  )
}

export default App;
