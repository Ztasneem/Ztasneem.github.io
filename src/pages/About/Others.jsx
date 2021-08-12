import React from "react";
import Carousel from "./Carousel";


const Others = () => {
  return (
    <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container py-4" id="skills">
          <h1 className="subtitle mb-5">Others</h1>
          <Carousel />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Others;
