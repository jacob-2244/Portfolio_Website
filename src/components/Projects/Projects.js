import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Echofy from "../../Assets/Projects/echofy.png";
import Portfolite from "../../Assets/Projects/portfolite.png";
import emotions from "../../Assets/Projects/emotions.jpg";
import eyecare from "../../Assets/Projects/eyecare.png";
import weather from "../../Assets/Projects/weather.jpeg"; 
import Ecommerce from "../../Assets/Projects/Ecommerce.png"; 


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
              imgPath={Echofy}
              isBlog={false}
              title="Echofy(Animated Website)"
              description="Echofy: Fully Animated Environmental Awareness Website 💚
              A fully animated, fully responsive website built to promote environmental awareness and sustainability 🌎"
              ghLink="https://github.com/jacob-2244/green_guard.git"
              demoLink="https://full-animated-website-seven.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyecare}
              isBlog={false}
              title="Federated Learning Cataract Detection"
              description="Detect Your Eye Disease Using Federated Learning where your data is not shared with anyone. The model is trained on your local device and the results are sent to the server without sharing your data. system is developed on nextjs, for database we are using firebase and for the model we are using federated learning."
              ghLink="  https://github.com/jacob-2244/Federated_Learning_Cataract_Detection.git"
              demoLink="https://federated-cataract.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E-Commerce Store"
              description="An Ecommerce Store which takes data from api and we are implementing logic add to cart using redux toolkit"
              ghLink="https://github.com/jacob-2244/Ecommerce-Store.git"
              demoLink="https://ecommerce-store-gold-chi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolite}
              isBlog={false}
              title="Portfolite"
              description="A animated website designed using next.js,typescript and used many animated libraries like framer-motion and used shadecn and other UI libraries"
              ghLink="https://github.com/jacob-2244/portfolite.git"
               demoLink="https://yaqoobportfolite.vercel.app/"
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
