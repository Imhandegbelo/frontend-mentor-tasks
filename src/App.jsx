import { lazy, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import AgeCalculator from "./pages/AgeCalculator/AgeCalculator";
import PricingApp from "./pages/PricingApp/PricingApp";
import RatingApp from "./pages/RatingApp/RatingApp";
import TicTacToe from "./pages/TicTacToe";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rating_app" element={<RatingApp />} />
        <Route path="/pricing_app" element={<PricingApp />} />
        <Route path="/age_calculator" element={<AgeCalculator />} />
        <Route path="/tic_tac" element={<TicTacToe />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
