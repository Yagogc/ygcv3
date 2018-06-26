import React from "react";
import Card from "./../styles/Card";
import styled from "react-emotion";
import logo from "../assets/logo.png";
import SocialCard from "./../styles/SocialCard";
import CardData from "./../styles/CardData";
import {
  Interest,
  InterestTitle,
  InterestUl,
  InterestLi,
  InterestCard
} from "./../styles/Interest";

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
              London
            </CardData>
            <CardData padded icon="phone">
              +447490303306
            </CardData>
            <CardData padded icon="calendar-alt">
              29/01/1988
            </CardData>
          </Data>
        </Info>
      </CardHome>
      <CardSocial padded marginBottom>
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
      <Card>
        <Interest>
          <InterestTitle>
            <InterestCard icon="heart">Interest</InterestCard>
          </InterestTitle>
          <InterestUl>
            <InterestLi>
              <InterestCard icon="gamepad">Games</InterestCard>
            </InterestLi>
            <InterestLi>
              <InterestCard icon="film">Films</InterestCard>
            </InterestLi>
            <InterestLi>
              <InterestCard icon="tv-retro">TV Shows</InterestCard>
            </InterestLi>
            <InterestLi>
              <InterestCard icon="plane">Travel</InterestCard>
            </InterestLi>
            <InterestLi>
              <InterestCard icon="drafting-compass">UI design</InterestCard>
            </InterestLi>
            <InterestLi>
              <InterestCard icon="tablet-alt">Gadgets</InterestCard>
            </InterestLi>
          </InterestUl>
        </Interest>
      </Card>
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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;
`;

const Info = styled.div`
  flex-grow: 2;
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: ${props => props.theme.ws.padding};
`;

const CardHome = styled(Card)`
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

const CardSocial = styled(Card)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-gap: 20px;
`;

const Logo = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const LogoImg = styled.img`
  width: 150px;
`;
