import React from "react";
import Card from "./../styles/Card";
import styled from "react-emotion";
import logo from "../assets/logo.png";
import SocialCard from "./../styles/SocialCard";
import CardData from "./../styles/CardData";

const Home = () => {
  return (
    <React.Fragment>
      <CardHome padded marginBottom>
        <Logo>
          <LogoImg src={logo} alt="Logo" />
        </Logo>
        <Info>
          <Introduction>
            My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
            specialized in HTML, CSS and JavaScript. I'm passionate about UX
            design, responsive design and the latest web technologies.
          </Introduction>
          <Data>
            <CardData padded icon="at">
              info@yagogc.com
            </CardData>
            <CardData padded icon="map-marker-alt">
              London, GB
            </CardData>
            <CardData padded icon="phone">
              +44 7490 303306
            </CardData>
            <CardData padded icon="calendar-alt">
              29/01/1988
            </CardData>
          </Data>
        </Info>
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
  margin-bottom: 10px;
`;
const Data = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1em;
  @media (${props => props.theme.mq.mobile}) {
    grid-template-columns: auto auto;
  }
`;

const Info = styled.div`
  flex-grow: 2;
  @media (${props => props.theme.mq.mobile}) {
    margin-bottom: 10px;
  }
  @media (${props => props.theme.mq.desktop}) {
    width: 66%;
  }
`;

const CardHome = styled(Card)`
  display: flex;
  align-items: center;
  @media (${props => props.theme.mq.mobile}) {
    flex-direction: column-reverse;
  }
`;

const CardSocial = styled(Card)`
  display: flex;
  align-items: center;
  @media (${props => props.theme.mq.mobile}) {
    flex-wrap: wrap;
  }
`;
const Logo = styled.div`
  flex-grow: 1;
  text-align: center;

  @media (${props => props.theme.mq.desktop}) {
    width: 33%;
  }
`;

const LogoImg = styled.img`
  width: 150px;
`;
