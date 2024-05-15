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
import PricingGrid from "./pages/PricingGrid/PricingGrid";
import ProjectTracking from "./pages/ProjectTracking/ProjectTracking";
import SocialMediaDash from "./pages/SocialMediaDashboard/SocialMediaDash";
import Newsletter from "./pages/Newsletter/Newsletter";
import Bootcamp from "./pages/Bootcamp/Bootcamp";
import IPTracker from "./pages/IPTracker/IPTracker";
import StaticJobListing from "./pages/StaticJobList/StaticJobListing";

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
        <Route path="/interactive_card" element={<InteractiveCard />} />
        <Route path="/pricing_grid" element={<PricingGrid />} />
        <Route path="/project_tracking" element={<ProjectTracking />} />
        <Route path="/social_media" element={<SocialMediaDash />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/bootcamp" element={<Bootcamp />} />
        <Route path="/ip_tracker" element={<IPTracker />} />
        <Route path="/job_listings" element={<StaticJobListing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
