import { SearchNormal1 } from "iconsax-react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import React, { useState, useEffect } from "react";

import MobileNavbar from "../../components/MobileNavbar";
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="closeDiv">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div>
          <img
            className="modalImg"
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?cs=srgb&dl=pexels-victor-freitas-841130.jpg&fm=jpg"
          />
        </div>
        <div className="modalContentDiv">
          <h1>PUSHUP</h1>
          <p>Chest </p>
        </div>
        <div className="modalinputsParent">
          <div className="modalinputsDiv">
            <div className="reps">
              <div className="innerreps">
                <div className="leftinput">
                  <h3>REPITITIONS</h3>
                </div>
                <div className="modalControls">
                  <div className="minusModal">-</div>
                  <input></input>
                  <div className="plusModal">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalinputsDiv">
            <div className="reps">
              <div className="innerreps">
                <div className="leftinput">
                  <h3>SETS</h3>
                </div>
                <div className="modalControls">
                  <div className="minusModal">-</div>
                  <input></input>
                  <div className="plusModal">+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="modalinputsDiv">
            <div className="reps">
              <div className="innerreps">
                <div className="leftinput">
                  <h3>WEIGHT</h3>
                </div>
                <div className="modalControls">
                  <div className="minusModal">-</div>
                  <input></input>
                  <div className="plusModal">+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saveBtnModal">
          <button type="submit" className="saveBtn" onClick={onClose}>
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [post, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getFeedPost = async () => {
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          alert(data.error);
          return;
        }
        setPosts(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getFeedPost();
  }, []);
  useEffect(() => {
    const body = document.querySelector("body");
    if (isModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto"; // Reset overflow when component unmounts
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <MobileNavbar />

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
                <SearchNormal1
                  className="searchIcon"
                  size="18"
                  color="#838383"
                />
              </div>
            </div>
          </div>

          <div className="parentCard">
            <div className="Gridcards">
              {post.map((post) => (
                <div
                  className="individualCards"
                  key={post._id}
                  onClick={openModal}
                >
                  <img className="Image" src={post.image} />
                  <div className="workoutTexts">
                    <h1>{post.workoutName}</h1>
                    <p>Chest</p>
                  </div>
                </div>
              ))}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
