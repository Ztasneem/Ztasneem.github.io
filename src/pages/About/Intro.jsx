import React from "react";
import Tasneemah from "../../assets/tasneemah.gif";

const Intro = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 d-flex justify-content-center align-items-center">
              <img
                src={Tasneemah}
                alt="gif"
                className="img-fluid"
                title="Happy Tasneemah !!"
              />
            </div>
            <div className="col-sm-8 d-flex justify-content-center flex-column py-4">
              <h1 className="subtitle">About</h1>

               <p className="mt-4">
                Tasneemah is a Freelance Full-Stack Developer. She loves
                developing stuff with MERN stack currently. She also explored
                different professions. She loves photography and crafting.
              </p>
              <p className="mt-4">
                Tasneemah loves Javascript. She is currently into React and
                NodeJs.{" "}
              </p>
              {/* <p className="text-muted mt-3">
                P.S Using first person is cliche !!!
              </p> */}
              <div className="mt-3 d-flex justify-content-between flex-wrap">
                <a href="#skills">
                  <button className="button">My Skills</button>
                </a>
                <a href="#experiences">
                  <button className="button">My Experience</button>
                </a>
                {/* <button className="button">Others</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
