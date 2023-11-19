import React from 'react'
import HomeRefurbished from './homerefurbished'
import AboutUs from './aboutus'
import Contact from './contact'
import Login from './login'
import MyAccount from './myaccount'
import SignUp from './signup'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";


export default function Main() {
    return (
        <div className="">
         <Router>
         <Routes>
         <Route exact path="/"  element={<HomeRefurbished/>}/>

         <Route exact path="/about"  element={<AboutUs/>} />
         <Route exact path="/contact"  element={<Contact/>} />
        <Route exact path="/signin"  element={<Login/>} />
        <Route exact path="/SIGNUP"  element={<SignUp/>} />

        <Route exact path="/myaccount"  element={<MyAccount/>} />
         </Routes>
         </Router>
        </div>
    )
}
