import React from "react";
import ExampleFunction from '../ExampleFunction'
import Home from '../component/Home'
import Nav from '../component/nav'
import NotFound from '../component/NotFound'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouterSetter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<Nav />} />
          <Route path="/home/:productId" element={<Home />} />
          <Route path="/exam" element={<ExampleFunction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterSetter;
