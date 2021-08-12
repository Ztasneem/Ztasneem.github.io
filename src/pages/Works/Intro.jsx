import React, { useState } from "react";
import GlowText from "../../partials/GlowText";
import ScrollAnimation from "react-animate-on-scroll";
import Tasneem from "../../assets/tasneemah.svg";

const Intro = () => {
  const [icons] = useState([
    {
      classname: "fab fa-github",
      link: "https://github.com/Ztasneem",
      title: "Github"
    },
    {
      classname: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/in/tas-yasmin/",
      title: "LinkedIn"
    },
    {
      classname: "fab fa-google",
      link: "mailto:tjui94@gmail.com",
      title: "Gmail"
    }
  ]);

  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-6">
              <h1 className="popout title">
                <span>T</span>
                <span>a</span>
                <span>s</span>
                <span>n</span>
                <span>e</span>
                <span>e</span>
                <span>m</span>
                <span>a</span>
                <span>h</span>
                <br />
                <span>Y</span>
                <span>a</span>
                <span>s</span>
                <span>m</span>
                <span>i</span>
                <span>n</span>
              </h1>
              <div className="w-25 mb-5">
                <hr className="title-hr mt-0" />
              </div>
              <div className="w-50">
                <div className="i-social">
                  {icons.map((icon, index) => (
                    <a
                      href={icon.link}
                      target="blank"
                      key={index + 1}
                      title={icon.title}
                    >
                      <i className={icon.classname} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-sm-6 d-flex justify-content-center align-items-center flex-column py-4">
              <ScrollAnimation animateIn="fadeInUp">
                <GlowText
                  first="F"
                  second="ront-End Developer "
                  third="a"
                  fourth="nd Designer"
                />
                <p className="mt-5">
                  I love developing stuff focused on Front-end
                  development.Occasionally doing freelance projects.
                </p>
                <a href="#projects">
                  <button className="button mt-4">
                    <i className="pr-2 fas fa-suitcase" />
                    See My works!
                  </button>
                </a>
                <img
                  src={Tasneem}
                  className="greeting-img bounce-1"
                  alt="avatar"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Intro;
