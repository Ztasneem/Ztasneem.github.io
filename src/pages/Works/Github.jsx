import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import myImg from "../../assets/avatar.svg";

function Github() {
  return (
     <React.Fragment>
      <div className="bg-1 h-80">
        <div className="container">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="row">
              <div className="col-sm-4 d-flex justify-content-center align-items-center">
                <img
                  src={myImg}
                  alt="avatar"
                  className="img-fluid"
                  title="Happy Tasneemah !!"
                />
              </div>
              <div className="col-sm-8 d-flex justify-content-center flex-column py-4">
                <h1 className="subtitle"> Let Me Introduce Myself</h1>

                <p className="mt-4">
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂
                  <br />I am fluent in classics like
                  <i>
                    <b> Javascript and Python. </b>
                  </i>
                  My field of Interest's are building new &nbsp;
                  <i>
                    <b>Web Technologies and Products </b>
                  </i>
                </p>
                <p className="mt-4">
                  Whenever possible, I also apply my passion for developing
                  products with <b>Node.js</b> and
                  <i>
                    <b> Modern Javascript Library and Frameworks</b>
                  </i>
                  &nbsp; like
                  <i>
                    <b> React.js</b>
                  </i>
                </p>
                {/* <p className="text-muted mt-3">
                P.S Using first person is cliche !!!
              </p> */}
               
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Github;
