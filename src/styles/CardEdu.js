import React from "react";

import styled from "react-emotion";

import Icon from "./Icon";

const CardEdu = props => {
  return (
    <Wrapper>
      <Header>
        <Icon icon="certificate" mRight />
        <TitleWrapper>
          <Title>{props.title}</Title> <Prep>in</Prep>
          <Name>{props.name}</Name>
        </TitleWrapper>
      </Header>
      <Info>
        <Date>
          <Icon icon="calendar-alt" /> {props.year}
        </Date>
        <Location>
          {props.institution} - {props.location}
        </Location>
      </Info>
      <Download href={process.env.PUBLIC_URL + props.downloadUrl}>
        Download Diploma <Icon icon="file-pdf" />
      </Download>
    </Wrapper>
  );
};

export default CardEdu;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  background: ${props => props.theme.color.ui2};
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  background: ${props => props.theme.color.ui3};
  align-items: center;
  padding: 5px 10px;
  font-size: 18px;
`;

const TitleWrapper = styled.div`
  font-size: 14px;
  flex: 1;
`;

const Title = styled.span``;
const Prep = styled.span`
  font-size: 12px;
  font-style: italic;
`;

const Name = styled.h1`
  font-size: 18px;
`;

const Info = styled.div`
  padding: 0 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.span`
  background: ${props => props.theme.color.ui3};
  padding: 5px 10px;
`;
const Location = styled.span``;

const Download = styled.a`
  text-align: right;
  background: ${props => props.theme.color.ui3};
  padding: 5px 10px;
  text-decoration: none;
  color: inherit;
  font-size: 14px;
  font-weight: bold;
`;
