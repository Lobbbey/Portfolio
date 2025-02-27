import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";


export default function App(){
  return(
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );

}
