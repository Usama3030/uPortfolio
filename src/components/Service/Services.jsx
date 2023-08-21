import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { GoDatabase} from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDeveloperMode}
            title={"Responsive Website"}
            disc={`Crafting digital experiences from concept to reality. As a passionate full-stack developer, I thrive on turning innovative ideas into functional and user-centric web applications.
            With a blend of front-end finesse and back-end prowess, I architect seamless solutions that bridge creativity and technology.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={GoDatabase}
            title={"Database Design"}
            disc={`As a database designer, I'm passionate about structuring information that empowers businesses.
            From conceptual blueprints to intricate data models, I create robust databases that support informed business decisions.
            By harnessing data's power, we can unlock new dimensions of efficiency and knowledge.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Mern Stack Developer"}
            disc={`Experienced MERN Stack Developer skilled in building dynamic web applications with proficiency in React, Node.js, and MongoDB. Strong advocate for clean code and user-centered design. 
            Seeking opportunities to leverage expertise in creating seamless, user-friendly experiences.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
