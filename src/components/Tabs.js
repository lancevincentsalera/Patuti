import React from "react";
import "../styles/Tabs.css";

const Tabs = ({ IndexHandler, handleTabLeave }) => {
  const tabs = ["Jump", "Left", "Right", "Dock"];

  const setIndexHandler = (index) => {
    IndexHandler(index);
  };
  return (
    <div className="tabs">
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onMouseEnter={() => setIndexHandler(index)}
            onMouseLeave={handleTabLeave}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
