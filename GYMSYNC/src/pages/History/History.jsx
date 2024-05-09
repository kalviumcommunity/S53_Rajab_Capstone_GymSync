import React, { useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import MobileNavbar from "../../components/MobileNavbar";
import { useEffect } from "react";

const History = () => {
  const userDataString = localStorage.getItem("user-gymSync");
  const userData = JSON.parse(userDataString);
  const userId = userData._id;
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getHistory = async () => {
      try {
        const res = await fetch(
          `https://gymsync-server.vercel.app/api/history/historydata/${userId}`
        );
        const data = await res.json();
        if (data.error) {
          alert(data.error);
          return;
        }
        setHistory(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getHistory();
  }, [userId]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <MobileNavbar />

      <ChakraProvider>
        <div className="HistoryDiv">
          <div className="AllContents">
            <div className="parentTopContentTexts ">
              <div className="firstChildTopContent">
                <div className="childTopContent">
                  <div className="topContentTexts historyTopTexts">
                    <h1>HISTORY LOGS</h1>
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
                          WORKOUTS
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={6} className="AccordionPanel">
                      <div>
                        <hr className="accordionHr"></hr>
                      </div>
                      <div className="accordionTextParent">
                        <div className="topDivHist">
                          <div className="leftHead">
                            <h1>S.no</h1>
                            <h1>Workout Name</h1>
                          </div>
                          <div className="rightHead">
                            <h1>Reps</h1>
                            <h1>Sets</h1>
                            <h1>Weight</h1>
                          </div>
                        </div>
                        {history && history.length > 0 ? (
                          history.map((data, i) => {
                            const serialNo = i + 1;
                            return (
                              <div key={i} className="accordionTextChild">
                                <div className="leftTexts">
                                  <div className="serialNo">
                                    <p>{serialNo}</p>
                                  </div>
                                  <div className="workoutName">
                                    <p>{data.workoutName}</p>
                                  </div>
                                </div>
                                <div className="rightTexts">
                                  <div className="serialNo">
                                    <p>{data.reps}</p>
                                  </div>
                                  <div className="workoutName">
                                    <p>{data.sets}</p>
                                  </div>
                                  <div className="workoutName">
                                    <p>{data.weight}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="noDataMessage">
                            No history data available
                          </div>
                        )}
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default History;
