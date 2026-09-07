import LeaderboardBanner from "./components/LeaderboardBanner/LeaderboardBanner";
import WatchAdsEarnBanner from "./components/WatchAdsEarnBanner/WatchAdsEarnBanner";
import ContactUsBanner from "./components/ContactUsBanner/ContactUsBanner";
import FollowEarn from "./components/FollowEarn/FollowEarn";
import DailyBonus from "./components/DailyBonus/DailyBonus";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="container-fluid p-0 banners-container">
      <LeaderboardBanner />
      <WatchAdsEarnBanner/>
      <ContactUsBanner/>
      <FollowEarn/>
      <DailyBonus/>
      <Footer />
      
      
    </main>
  );
}

export default App;