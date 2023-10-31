import { Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import AgeCalculator from "./pages/AgeCalculator/AgeCalculator";
import PricingApp from "./pages/PricingApp/PricingApp";
import RatingApp from "./pages/RatingApp/RatingApp";
import TicTacToe from "./pages/TicTacToe/TicTacToe";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import NotFound from "./pages/NotFound/NotFound";
import NFTComponent from "./pages/NFTpreviewComponent/NFTComponent";
import InteractiveCard from "./pages/Interactive Card/InteractiveCard";

function App() {
  return (
    <div className="max-w-[1440px] h-screen mx-auto">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rating_app" element={<RatingApp />} />
        <Route path="/pricing_app" element={<PricingApp />} />
        <Route path="/age_calculator" element={<AgeCalculator />} />
        <Route path="/tic_tac" element={<TicTacToe />} />
        <Route path="/nft_preview" element={<NFTComponent />} />
        <Route path="/verify_card" element={<InteractiveCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
