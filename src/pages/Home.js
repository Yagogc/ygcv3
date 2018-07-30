import React from "react";
import Block from "../styles/Block";
import styled from "react-emotion";
import logo from "../assets/logo.png";
import CardData from "./../styles/CardData";
import Grid from "./../styles/Grid";
import Separator from "../styles/Separator";
import Social from "../components/Social";
import Hobbies from "./../components/Hobbies";
import Currently from "./../components/Currently";

const Home = () => {
  return (
    <Grid>
      <Block padded>
        <Grid>
          <CardHome>
            <Logo>
              <LogoImg src={logo} alt="Logo" />
            </Logo>
            <Info>
              <Introduction>
                My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
                specialized in HTML, CSS and JavaScript. I'm passionate about UX
                design, responsive design and the latest web technologies.
              </Introduction>
            </Info>
          </CardHome>
          <Data>
            <CardData padded icon="at">
              info@yagogc.com
            </CardData>
            <CardData padded icon="map-marker-alt">
              London
            </CardData>
            <CardData padded icon="phone">
              +447490303306
            </CardData>
            <CardData padded icon="ban">
              Not Available
            </CardData>
          </Data>
        </Grid>
      </Block>
      <Separator />
      <Social />
      <Separator />
      <Hobbies />
      <Separator />
      <Currently />
    </Grid>
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;
`;

const Info = styled.div`
  flex-grow: 2;
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: ${props => props.theme.ws.padding};
`;

const CardHome = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.ws.padding};
  justify-content: center;
  align-items: center;
  @media (${props => props.theme.mq.mobile}) {
    grid-template-rows: auto auto;
  }
  @media (${props => props.theme.mq.desktop}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Logo = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 120px;
`;
