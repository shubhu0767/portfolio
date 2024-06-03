import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import onlineDrawingTool from "../../Assets/Projects/onlineDrawingTool.png";
import movieApp from "../../Assets/Projects/movieApp.png";
import crypto from "../../Assets/Projects/crypto.png";

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
              imgPath={onlineDrawingTool}
              isBlog={false}
              title="Online Drawing Tool"
              description="The Online Drawing Tool is a web-based application designed to provide users with an intuitive and interactive platform for creating digital artwork. Built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js), this project combines modern web technologies to deliver a seamless and responsive user experience."
              ghLink="https://github.com/shubhu0767/online-drawing-tool"
              demoLink="https://online-drawing-tool-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieApp}
              isBlog={false}
              title="MovieApp"
              description="MovieApp is a comprehensive web application designed to enhance the movie-watching experience by providing users with detailed information about films, including reviews, ratings, and trailers. Developed using the React js, TMDB API's Firebase Tailwind CSS, Redux Toolkit, this project leverages modern web technologies to offer a responsive and engaging user interface."
              ghLink="https://github.com/shubhu0767/movieapp"
              demoLink="https://moviedetailsinfo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="CryptoDunia"
              description="CryptoWorld is a dynamic web application designed to provide users with comprehensive information about cryptocurrencies and the latest news in the crypto world. Developed using React.js, Rapid API, Redux Toolkit, and Tailwind CSS, this project leverages modern web development technologies to deliver a responsive, user-friendly, and visually appealing interface."
              ghLink="https://github.com/shubhu0767/CryptoDunia"
              demoLink="https://cryptodunia.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CryptoDunia"
              description="CryptoWorld is a dynamic web application designed to provide users with comprehensive information about cryptocurrencies and the latest news in the crypto world. Developed using React.js, Redux Toolkit, Rapid API and Tailwind CSS, this project leverages modern web development technologies to deliver a responsive, user-friendly, and visually appealing interface."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
