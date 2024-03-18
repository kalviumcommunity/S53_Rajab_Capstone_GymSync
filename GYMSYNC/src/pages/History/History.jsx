import React from "react";
import { SearchNormal1 } from "iconsax-react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const History = () => {
  return (
    <div className="HistoryDiv">
      <div className="AllContents">
        <div className="parentTopContentTexts ">
          <div className="firstChildTopContent">
            <div className="childTopContent">
              <div className="topContentTexts historyTopTexts">
                <h1>HISTORY LOGS</h1>
                {/* <p>Let's Crush Today's Workout!</p> */}
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
          <div className="AccordionParentDiv">
            <Accordion
              defaultIndex={[0]}
              allowMultiple
              className="AccordionMainDiv"
            >
              <AccordionItem className="AccordionComponent">
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="BoxAccordion"
                    >
                      07 MARCH 2024
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={6} className="AccordionPanel">
                  <div>
                    <hr className="accordionHr"></hr>
                  </div>
                  <div className="accordionTextParent">
                    <div className="accordionTextChild">
                      <div className="leftTexts">
                        <div className="serialNo">
                          <h1>S.No</h1>
                          <br></br>
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                          <p>5</p>
                        </div>
                        <div className="workoutName">
                          <h1>WORKOUT </h1>
                          <br></br>
                          <p>PUSH UP</p>
                          <p>PUSH UP</p>
                          <p>PUSH UP</p>
                          <p>PUSH UP</p>
                          <p>PUSH UP</p>
                        </div>
                      </div>
                      <div className="rightTexts">
                        <div className="serialNo">
                          <h1>REPS</h1>
                          <br></br>
                          <p>15</p>
                          <p>15</p>
                          <p>15</p>
                          <p>15</p>
                          <p>15</p>
                        </div>
                        <div className="workoutName">
                          <h1>SETS </h1>
                          <br></br>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                        </div>
                        <div className="workoutName">
                          <h1>WEIGHT </h1>
                          <br></br>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                          <p>4</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
