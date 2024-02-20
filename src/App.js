import BasicGrid from "./components/Container.js";
import "./App.css";
import { useEffect, useState } from "react";
import { jumps, lefts, rights, docks } from "./images";
import ButtonAppBar from "./components/AppBar.js";

function App() {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(-1);
  const [imagePosition, setImagePosition] = useState(0);
  const [imageXPosition, setImageXPosition] = useState(0);

  const IndexHandler = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    let intervalID;
    const imageSets = [jumps, lefts, rights, docks];
    if (tabIndex >= 0 && tabIndex < imageSets.length) {
      setImages(imageSets[tabIndex]);

      intervalID = setInterval(() => {
        setCurrentImageIndex((prevIndex) => {
          if (tabIndex === 0) {
            const newYPosition = prevIndex === 3 ? -30 : 0;
            setImagePosition(newYPosition);
            setImageXPosition(-50);
          } else if (tabIndex === 1) {
            const newXPosition = prevIndex < 7 && prevIndex > 1 ? -100 : -50;
            setImagePosition(0);
            setImageXPosition(newXPosition);
          } else if (tabIndex === 2) {
            const newXPosition = prevIndex < 7 && prevIndex > 1 ? 0 : -50;
            setImagePosition(0);
            setImageXPosition(newXPosition);
          } else {
            setImagePosition(0);
            setImageXPosition(-50);
          }
          return (prevIndex + 1) % imageSets[tabIndex].length;
        });
      }, 200);
    }

    return () => clearInterval(intervalID);
  }, [tabIndex]);

  const handleTabLeave = () => {
    setTabIndex(-1);
    setCurrentImageIndex(0);
  };

  return (
    <div className="App">
      <ButtonAppBar />
      <BasicGrid
        images={images}
        IndexHandler={IndexHandler}
        currentImageIndex={currentImageIndex}
        imagePosition={imagePosition}
        imageXPosition={imageXPosition}
        handleTabLeave={handleTabLeave}
        index={tabIndex}
      />
    </div>
  );
}

export default App;
