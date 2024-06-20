import { SearchNormal1 } from "iconsax-react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import React, { useState, useEffect } from "react";

import MobileNavbar from "../../components/MobileNavbar";
const Modal = ({ isOpen, onClose, postDetails }) => {
  const [repsCount, setRepsCount] = useState(0);
  const [setsCount, setSetsCount] = useState(0);
  const [weightCount, setWeightCount] = useState(0);

  const incrementReps = () => {
    setRepsCount((prevCount) => prevCount + 1);
  };

  const decrementReps = () => {
    if (repsCount > 0) {
      setRepsCount((prevCount) => prevCount - 1);
    }
  };

  const incrementSets = () => {
    setSetsCount((prevCount) => prevCount + 1);
  };

  const decrementSets = () => {
    if (setsCount > 0) {
      setSetsCount((prevCount) => prevCount - 1);
    }
  };

  const incrementWeight = () => {
    setWeightCount((prevCount) => prevCount + 1);
  };

  const decrementWeight = () => {
    if (weightCount > 0) {
      setWeightCount((prevCount) => prevCount - 1);
    }
  };

  const handleRepsChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setRepsCount(value);
    }
  };

  const handleSetsChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setSetsCount(value);
    }
  };

  const handleWeightChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setWeightCount(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userDataString = localStorage.getItem("user-gymSync");
    const userData = JSON.parse(userDataString);
    const userId = userData._id;

    const formData = {
      userId: userId,
      workoutName: postDetails.workoutName,
      sets: setsCount,
      weight: weightCount,
      reps: repsCount,
    };
    console.log("formData: ", formData);
    try {
      if (repsCount === 0 && setsCount === 0 && weightCount === 0) {
        alert("Please enter at least one value for Reps, Sets, or Weight");
        return;
      }
      const res = await fetch(
        "/api/history/save",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log("data: ", data);
      if (data.error) {
        console.error(data.error);
        alert("Error submitting workout data");
        return;
      }
      console.log("Workout data submitted successfully:", data);
      setRepsCount(0);
      setSetsCount(0);
      setWeightCount(0);
      alert("Successfully Saved to History");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Error submitting workout data");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <form className="modal-content" onSubmit={handleSubmit}>
        <div className="closeDiv">
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div>
          <img className="modalImg" src={postDetails.image} />
        </div>
        <div className="modalContentDiv">
          <h1>{postDetails.workoutName}</h1>
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
                  <div className="minusModal" onClick={decrementReps}>
                    -
                  </div>
                  <input
                    name="reps"
                    value={repsCount}
                    onChange={handleRepsChange}
                  ></input>
                  <div className="plusModal" onClick={incrementReps}>
                    +
                  </div>
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
                  <div className="minusModal" onClick={decrementSets}>
                    -
                  </div>
                  <input
                    name="sets"
                    value={setsCount}
                    onChange={handleSetsChange}
                  ></input>
                  <div className="plusModal" onClick={incrementSets}>
                    +
                  </div>
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
                  <div className="minusModal" onClick={decrementWeight}>
                    -
                  </div>
                  <input
                    name="weight"
                    value={weightCount}
                    onChange={handleWeightChange}
                  ></input>
                  <div className="plusModal" onClick={incrementWeight}>
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="saveBtnModal">
          <button type="submit" className="saveBtn">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

const HomePage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [post, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getFeedPost = async () => {
      try {
        const res = await fetch(
          "https://gymsync-server.vercel.app/api/posts/feed"
        );
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
              {post &&
                post.map((post) => (
                  <>
                    <div
                      className="individualCards"
                      key={post._id}
                      onClick={() => {
                        setSelectedPost(post);
                        openModal();
                      }}
                    >
                      <img className="Image" src={post.image} />
                      <div className="workoutTexts">
                        <h1>{post.workoutName}</h1>
                        <p>Chest</p>
                      </div>
                    </div>
                    <>
                      <Modal
                        postDetails={selectedPost}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                      />
                    </>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
