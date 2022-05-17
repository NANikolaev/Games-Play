import { useState } from "react";
import { Route, Routes, } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/HomeSection/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Catalogue from "./components/Catalogue/Catalogue";
import Details from "./components/Details/Details";

function App() {


  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/catalog" element={<Catalogue />} />
          <Route path='/game/details/:id' element={<Details />} />
        </Routes>

      </main>

    </div>


  );
}


export default App;
