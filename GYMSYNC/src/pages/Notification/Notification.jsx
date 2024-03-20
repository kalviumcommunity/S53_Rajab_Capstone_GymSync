import React from "react";
import { SearchNormal1 } from "iconsax-react";
import { ChakraProvider } from "@chakra-ui/react";

const Notification = () => {
  return (
    <ChakraProvider>
      <div className="HistoryDiv">
        <div className="AllContents">
          <div className="parentTopContentTexts ">
            <div className="firstChildTopContent">
              <div className="childTopContent">
                <div className="topContentTexts historyTopTexts">
                  <h1>NOTIFICATION</h1>
                  <p>Let's Crush Today's Workout!</p>
                </div>
                <div className="searchbarDiv">
                  <input
                    className="searchBar historySearch"
                    type="text"
                    placeholder="Search"
                  />
                  <SearchNormal1
                    className="searchIcon"
                    size="18"
                    color="#838383"
                  />
                </div>
              </div>
            </div>
            <div className="NotificationDiv">
              <div className="notificationParentDiv">
                <div className="notificationIndividual">
                  <div className="notifHeader">
                    <h1>ALEX COSTA</h1>
                  </div>
                  <div className="subTextsNotif">
                    <p>I'll be on Leave For Two days</p>
                    <i>
                      <p>26 JAN 2023</p>
                    </i>
                  </div>
                </div>
                <div className="notificationIndividual">
                  <div className="notifHeader">
                    <h1>ALEX COSTA</h1>
                  </div>
                  <div className="subTextsNotif">
                    <p>I'll be on Leave For Two days</p>
                    <i>
                      <p>26 JAN 2023</p>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Notification;
