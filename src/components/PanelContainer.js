import React from "react";
import "../styles/PanelContainer.css";
import Tabs from "./Tabs";

const PanelContainer = ({
  images,
  IndexHandler,
  currentImageIndex,
  imagePosition,
  imageXPosition,
  handleTabLeave,
  index,
}) => {
  return (
    <>
      <Tabs IndexHandler={IndexHandler} handleTabLeave={handleTabLeave} />
      <div className="parent-container">
        <div className="panel-container">
          {index !== -1 && (
            <img
              src={images[currentImageIndex]}
              alt="jump"
              style={{
                transform: `translate(${imageXPosition}%,${imagePosition}%)`,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PanelContainer;
