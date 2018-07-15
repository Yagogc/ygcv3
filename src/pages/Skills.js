import React from "react";
import { List } from "../styles/List";

import skills from "../data/skills";
// import Container from "./../styles/Container";
import styled from "react-emotion";

const Skills = () => {
  return (
    <Container>
      {console.log(skills.length)}
      {skills.map((skill, i) => (
        <List
          name={skill.name}
          icon={skill.icon}
          items={skill.skills}
          iconType={skill.iconType}
          key={i}
        />
      ))}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-row: auto;

  @media (${props => props.theme.mq.desktop}) {
    grid-template-columns: 50% 50%;
  }
`;
