import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="wrapper">
      <NavBar/>

    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes> */}
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route/>
    </Routes>

    </div>
  );
};

export default App;
