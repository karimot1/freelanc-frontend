
import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar2 from "./Component/Navbar2";
import Signup from "./Component/authe/Signup";
import Login from "./Component/authe/Login";
import Postproject from "./Component/Postproject";
import Profile from "./Component/Profile"
import Accountselection from "./Component/authe/Accountselection";
import Job from "./Component/authe/Job";
import Dashboard from "./Component/Dashboard";
import Myaccount from "./Component/Myaccount";
import Profilecontainer from "./Component/Profilecontainer";
import Editprofile from "./Component/Editprofile";
import Delectaccount from "./Component/Delectaccount";
import Dashbackground from "./Component/Dashbackground";

const App =()=> {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navbar2 />}/>
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />}/>
      <Route path="/post-project" element={<Postproject />} />
        <Route path="/choose" element={<Accountselection />} />
        <Route path="/job" element={<Job />}/>

        <Route path="/dashboard"  element={< Dashboard />} >
          <Route index element={<Dashbackground />} />

        </Route>


        <Route path="/profile"  element={<Profilecontainer />} >

          <Route index element={<Profile />} />
          <Route path="/profile/myaccount" element={<Myaccount  />} />
          <Route path="/profile/EditProfile" element={<Editprofile />}/>
          <Route path="/profile/DelectAccount" element={<Delectaccount />} />

        </Route>

    </Routes>
    </>
  )
}

export default App;
