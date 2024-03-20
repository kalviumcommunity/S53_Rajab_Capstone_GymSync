import { SearchNormal1 } from "iconsax-react";

import React from "react";
const HomePage = () => {
  return (
    <div className="AllContents">
      <div className="parentTopContentTexts ">
        <div className="firstChildTopContent">
          <div className="childTopContent">
            <div className="topContentTexts">
              <h1>WELCOME BACK!</h1>
              <p>Let's Crush Today's Workout!</p>
              <div className="MainCategoryDiv">
                <div className="CategoryDiv">
                  <button className="categories">Chest</button>
                  <button className="categories">Shoulder</button>
                  <button className="categories">Triceps</button>
                  <button className="categories">Biceps</button>
                </div>
              </div>
            </div>
            <div className="searchbarDiv">
              <input className="searchBar" type="text" placeholder="Search" />
              <SearchNormal1 className="searchIcon" size="18" color="#838383" />
            </div>
          </div>
        </div>

        <div className="parentCard">
          <div className="Gridcards">
            <div className="individualCards">
              <img
                className="Image"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              />
              <div className="workoutTexts">
                <h1>PUSHUP</h1>
                <p>Chest</p>
              </div>
            </div>
            <div className="individualCards">
              <img
                className="Image"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              />
              <div className="workoutTexts">
                <h1>PUSHUP</h1>
                <p>Chest</p>
              </div>
            </div>
            <div className="individualCards">
              <img
                className="Image"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              />
              <div className="workoutTexts">
                <h1>PUSHUP</h1>
                <p>Chest</p>
              </div>
            </div>
            <div className="individualCards">
              <img
                className="Image"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              />
              <div className="workoutTexts">
                <h1>PUSHUP</h1>
                <p>Chest</p>
              </div>
            </div>
            <div className="individualCards">
              <img
                className="Image"
                src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
              />
              <div className="workoutTexts">
                <h1>PUSHUP</h1>
                <p>Chest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
