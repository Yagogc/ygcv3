import React from "react";
import Card from "./../styles/Card";
import styled from "react-emotion";
import logo from "../assets/logo.png";
import SocialCard from "./../styles/SocialCard";

const Home = () => {
  return (
    <React.Fragment>
      <CardHome padded marginBottom>
        <Logo>
          <LogoImg src={logo} alt="Logo" />
        </Logo>
        <Introduction>
          My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
          specialized in HTML, CSS and JavaScript. I'm passionate about UX
          design, responsive design and the latest web technologies.
        </Introduction>
      </CardHome>
      <CardSocial>
        <SocialCard padded icon="github-alt" color="github">
          Github
        </SocialCard>
        <SocialCard padded icon="linkedin-in" color="linkedin">
          LinkedIn
        </SocialCard>
        <SocialCard padded icon="facebook" color="facebook">
          Facebook
        </SocialCard>
        <SocialCard padded icon="google-plus-g" color="google">
          Google +
        </SocialCard>
      </CardSocial>
    </React.Fragment>
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

const CardSocial = styled(Card)`
  display: flex;
  align-items: center;
  @media (max-device-width: 768px) {
    flex-wrap: wrap;
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
