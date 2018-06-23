import React from "react";
import Card from "./../styles/Card";
import styled from "react-emotion";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <CardHome padded>
      <Logo>
        <LogoImg src={logo} alt="Logo" />
      </Logo>
      <Introduction>
        My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
        specialized in HTML, CSS and JavaScript. I'm passionate about UX design,
        responsive design and the latest web technologies.
      </Introduction>
    </CardHome>
  );
};

export default Home;

const Name = styled.span`
  font-family: "Marck Script";
  font-size: 26px;
`;
const Introduction = styled.p`
  line-height: 24px;
  text-align: justify;
  display: inline-block;
  flex-grow: 2;
  @media (max-device-width: 768px) {
    margin-bottom: 10px;
  }
  @media (min-device-width: 768px) {
    width: 66%;
  }
`;

const CardHome = styled(Card)`
  display: flex;
  align-items: center;
  @media (max-device-width: 768px) {
    flex-direction: column-reverse;
  }
`;
const Logo = styled.div`
  flex-grow: 1;
  text-align: center;

  @media (min-device-width: 768px) {
    width: 33%;
  }
`;

const LogoImg = styled.img`
  width: 150px;
`;
