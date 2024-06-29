import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

const Experience = () => {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="Aug 2023 - Present"
          dateClassName="mx-lg-2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h6 className="vertical-timeline-element-subtitle mt-1">
            Opineworks LLP
          </h6>
          <p>Next.JS | TypeScript | Redux Toolkit | Tailwind CSS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="May 2023 - Jul 2023"
          dateClassName="mx-lg-2"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer Intern
          </h3>
          <h6 className="vertical-timeline-element-subtitle mt-1">
            Opineworks LLP
          </h6>
          <p>React.JS | JavaScript | Redux | Material UI</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          dateClassName=" text-white mx-lg-2"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title mb-4">
            Bachelor of Computer Applications
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
};

export default Experience;
