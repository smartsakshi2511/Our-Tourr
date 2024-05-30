import React from "react";
import "./Home.css";
import HeroSec from "../../Component/HeroSection/HeroSec";
import BestHoliday from "../../Component/BestHolidays/BestHoliday";
import Recommended from "../../Component/RecommendedTour/Recommended";
import SearchBar from "../../Component/SearchBar/SearchBar";
import FavHolidays from "../../Component/FavHolidays/FavHolidays";
import PlanHolidays from "../../Component/PlanTheHolidays/PlanHolidays";
import BudgetFriendly from "../../Component/Budget Friendlt/BudgetFriendly";
import { ResizableBox } from "../../Component/NavigationBar/NewNav";

function Home() {
  return (
    <div>
      {" "}
      <HeroSec />
      
      <SearchBar/>
      
      <BestHoliday/>
   <div className="my-4 ny-sm-5">
   <Recommended itemRecommendedTitle="Recommended Places for You"/>
   </div>
   <FavHolidays/>
    <PlanHolidays itemHolidayPlanTitle="Plan Your Dream Place Today"/>
    <BudgetFriendly/>
    <ResizableBox/>
    </div>
   
  );
}

export default Home;
