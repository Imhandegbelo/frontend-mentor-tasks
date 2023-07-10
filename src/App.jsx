import { lazy } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import RatingApp from "./pages/RatingApp"
// import PricingApp from "./pages/PricingApp";

const RatingApp = lazy(() => import("./pages/RatingApp"));
const PricingApp = lazy(() => import("./pages/PricingApp"));
const AgeCalculator = lazy(() => import("./pages/AgeCalculator"));

function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rating_app" element={<RatingApp />} />
        <Route path="/pricing_app" element={<PricingApp />} />
        <Route path="/age_calculator" element={<AgeCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
