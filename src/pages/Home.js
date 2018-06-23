import React from "react";
import Card from "./../styles/Card";
import styled from "react-emotion";

const Home = () => {
  return (
    <Card padded>
      <Introduction>
        My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
        specialized in HTML, CSS and JavaScript. I'm passionate about UX design,
        responsive design and the latest web technologies.
      </Introduction>
    </Card>
  );
};

export default Home;

const Name = styled.span`
  font-family: "Marck Script";
  font-size: 26px;
`;
const Introduction = styled.span`
  line-height: 24px;
  text-align: justify;
  display: inline-block;
`;
