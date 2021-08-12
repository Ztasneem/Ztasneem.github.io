import React, { useState } from "react";

const Footer = () => {
  const [link] = useState([
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
      <div className="bg-1 w-100">
        <div className="bg-1 text-center container py-5">
          <div className="d-flex justify-content-center align-items-center">
            {link.map((link, index) => (
              <div key={index + 1} className="px-4">
                <a href={link.link} target="blank" title={link.title}>
                  <i className={link.classname} />
                </a>
              </div>
            ))}
          </div>
          <h6 className="mt-4">Tasneemah Yasmin — Copyright © 2021</h6>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
