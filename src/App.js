import React from "react";
import Remove from "./components/bodypix";
import Identify from "./components/identify";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from "./components/main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/image-identify" element={<Identify />}></Route>
        <Route path="/delete-background" element={<Remove />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;