import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Wines from "../Pages/Wines";
import Recipes from "../Pages/Recipes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />{" "}
      <Route path="/MainPage" element={<MainPage />} />
      <Route path="/Wines" element={<Wines />} />
      <Route path="/Recipes" element={<Recipes />} />
    </Routes>
  );
}
