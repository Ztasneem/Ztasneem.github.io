import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./ResumeContent";
import ScrollAnimation from "react-animate-on-scroll";
import pdf from "../../assets/Tasneemah.pdf";

const Experience = () => {
  return (
    <React.Fragment>
      <div className="bg-2 h-80">
        <div className="container py-4" id="experiences">
          <h1 className="subtitle">Experience</h1>
          <ScrollAnimation animateIn="fadeInUp">
            <Container>
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <div className="mt-3 d-flex justify-content-between flex-wrap">
                  <a href="https://drive.google.com/file/d/1QZ4PEwgGFQAyA7VXIDZ5-rbq8nrZvSXC/view?usp=sharing">
                    <button className="button" href={pdf} target="_blank">
                      Download CV <i className="fas fa-download"></i>
                    </button>
                  </a>
                </div>
              </Row>
              <Row className="resume">
                <Col md={6} className="resume-left">
                  <h3 className="resume-title">Experience</h3>
                  <Resumecontent
                    title="Freelance Web Developer"
                    date=" 2020-continue"
                    content={[
                      "Web Developer and Designer."
                    ]}
                  />
                   <Resumecontent
                    title="Student Counsellor"
                    date=" June, 2019- Oct, 2019"
                    content={[
                      "Prominent Consultant"   
                    ]}
                  />
                   <Resumecontent
                    title="Web Developer & SEO Expert"
                    date="Jan, 2019- May, 2019"
                    content={[
                      "CODETREEBD"          
                    ]}
                  />
                   <Resumecontent
                    title="Product Manage"
                    date="Jan, 2019 – Continuing"
                    content={[
                      "Ekhaneikini.com"          
                    ]}
                  />  
                </Col>
                <Col md={6} className="resume-right">
                  <h3 className="resume-title">Education</h3>
                  <Resumecontent
                    title="B.Sc. in Computer Science & Engineering [EWU] "
                    date="2018"
                    content={[
                      "Software Engineer"
                    ]}
                    
                  />
                  <Resumecontent
                    title="H.S.C. [Milestone College]"
                    date="2012"
                    content={[
                      "Science"
                    ]}
                  />
                  <Resumecontent
                    title="S.S.C [Uttara High School & College] "
                    date="2010"
                    content={[
                      "Science"
                    ]}
                  />
                  <h3 className="resume-title">Research Experience</h3>
                  <Resumecontent
                    title="Differential Evolution Approach for
Localization in Wireless Sensor Networks [MATLAB]"
                    content={[
                      "The research is to find efficient localization in WSN using RSSI (Received Signal Strength Indicator) and an Evolutionary algorithm."
                    ]}
                  />
                </Col>
              </Row>
              <Row style={{ justifyContent: "center", position: "relative" }}>
                <div className="mt-3 d-flex justify-content-between flex-wrap">
                  <a href="https://drive.google.com/file/d/1QZ4PEwgGFQAyA7VXIDZ5-rbq8nrZvSXC/view?usp=sharing">
                    <button className="button" href={pdf} target="_blank">
                      Download CV <i className="fas fa-download"></i>
                    </button>
                  </a>
                </div>
              </Row>
            </Container>
          </ScrollAnimation>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
