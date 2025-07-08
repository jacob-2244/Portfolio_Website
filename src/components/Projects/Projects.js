import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dep from "../../Assets/Projects/DeP.jpeg";
import YumSpot from "../../Assets/Projects/YumSpot.png";
import notekeeper from "../../Assets/Projects/notekeeper.png";
import emotions from "../../Assets/Projects/emotions.jpg";
import eyecare from "../../Assets/Projects/eyecare.png";
import weather from "../../Assets/Projects/weather.jpeg"; 
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dep}
              isBlog={false}
              title="DEP"
              description="Digital Empowerment Pakistan is a platform where individuals can apply for internships, leadership programs, and other opportunities to enhance their skills. Built with Next.js, Material-UI, and Firebase, the platform enables real-time interactions, resource sharing, and seamless communication to empower aspiring professionals."
              ghLink="https://github.com/jacob-2244/DigitalEmpowermentPakistan"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyecare}
              isBlog={false}
              title="Federated Learning Cataract Detection"
              description="Detect Your Eye Disease Using Federated Learning where your data is not shared with anyone. The model is trained on your local device and the results are sent to the server without sharing your data. system is developed on nextjs, for database we are using firebase and for the model we are using federated learning."
              ghLink="  https://github.com/jacob-2244/Federated_Learning_Cataract_Detection.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YumSpot}
              isBlog={false}
              title="YumSpot"
              description="YumSpot is a full-stack restaurant reservation web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). Users can browse restaurants, reserve tables, and manage bookings online."
              ghLink="https://github.com/jacob-2244/YumSpot.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notekeeper}
              isBlog={false}
              title="NoteKeeper APP"
              description="NoteKeeper is a simple and intuitive web application to keep your daily notes organized. Whether it’s a to-do list, reminder, or personal idea, NoteKeeper helps you manage your notes efficiently in a clean user interface."
              ghLink="https://github.com/jacob-2244/NoteKeeperApp.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotions}
              isBlog={false}
              title="Emotion Detection System"
              description="Emotion Detection System is an AI-powered application that detects 7 facial emotions in real time. The system uses deep learning models to analyze facial expressions either through a live camera feed or a video upload, helping users understand emotional states with accuracy and speed."
              ghLink="https://github.com/jacob-2244/Detecting_Emotions.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather} // You can replace this with a relevant image for Weather Update if available
              isBlog={false}
              title="Weather Update"
              description="Weather Update is a web application that provides real-time weather conditions, wind speed, temperature, and more based on your current location. Stay informed about the weather wherever you are with an intuitive and user-friendly interface."
              ghLink="https://github.com/jacob-2244/WeatherUpdate.git"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
