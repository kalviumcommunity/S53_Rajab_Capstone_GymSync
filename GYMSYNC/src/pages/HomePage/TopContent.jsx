import { SearchNormal1 } from "iconsax-react";
import React from "react";
const TopContent = () => {
  return (
    <div className="AllContents">
      <div className="parentTopContentTexts ">
        <div className="childTopContent">
          <div className="topContentTexts">
            <h1>WELCOME BACK!</h1>
            <p>Let's Crush Today's Workout!</p>
            <div className="CategoryDiv">
              <button className="categories"> Chest</button>
              <button className="categories">Shoulder</button>
              <button className="categories">Biceps</button>
              <button className="categories">Triceps</button>
            </div>
          </div>
          <div className="searchbarDiv">
            <input className="searchBar" type="text" placeholder="Search" />
            <SearchNormal1 className="searchIcon" size="18" color="#838383" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
