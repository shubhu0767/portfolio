import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Tambwe </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br /> I am Completed my degree in Bachelor of Computer Application (BCA).
            <br />
            Additionally, I am currently employed as a Software developer at
            Opineworks LLP.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Knowing Trending Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn New things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubham T.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
