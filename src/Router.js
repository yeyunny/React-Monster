import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Monsters from "./Monsters/Monsters";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Monsters />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
