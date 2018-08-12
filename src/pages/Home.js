import React from "react";
import Block from "../styles/Block";
import styled from "react-emotion";
import CardData from "./../styles/CardData";
import Grid from "./../styles/Grid";
import Separator from "../styles/Separator";
import Social from "../components/Social";
import Hobbies from "./../components/Hobbies";
import Currently from "./../components/Currently";
import Logo from "./../components/Logo";

const Home = () => {
  return (
    <Grid>
      <Block padded>
        <Grid>
          <CardHome>
            <Logo />
            <Info>
              <Introduction>
                My name is <Name>Yago Gonzalez</Name>, I’m a Front End Developer
                specialized in React and CSS. I'm really passionate about UI
                design, design systems, responsive design, animations and
                CSS-in-JS. In fact, anything related in some way to CSS I'll be
                really interested in.
              </Introduction>
              <Introduction>
                I'm also interested in the latest technologies and advances in
                the front-end field like: SSR, GraphQL or PWAs.
              </Introduction>
            </Info>
          </CardHome>
          <Data>
            <CardData padded icon="at" url="mailto:info@yagogc.com">
              info@yagogc.com
            </CardData>
            <CardData padded icon="map-marker-alt">
              London
            </CardData>
            <CardData padded icon="phone" url="tel:+447490303306">
              +44 7490 303306
            </CardData>
            <CardData padded icon="ban">
              Not available for roles
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
  display: flex;
  flex-direction: column;
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
