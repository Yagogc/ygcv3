import React from "react";

import styled from "react-emotion";
import Icon from "./Icon";

const Interest = props => {
  return <InterestWrapper {...props} />;
};
export { Interest };

const InterestWrapper = styled.div`
  display: flex;
  @media (${props => props.theme.mq.mobile}) {
    flex-direction: column;
  }
`;

const InterestTitle = props => {
  return (
    <InterestTitleWrapper {...props}>{props.children}</InterestTitleWrapper>
  );
};

export { InterestTitle };

const InterestTitleWrapper = styled.div`
  background: ${props => props.theme.color.ui3};
  padding: 10px 20px;
  margin-bottom: ${props => (props.marginBottom ? "10px" : 0)};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;

  @media (${props => props.theme.mq.mobile}) {
    width: 100%;
  }
`;

const InterestUl = props => {
  return <InterestUlWrapper {...props}>{props.children}</InterestUlWrapper>;
};

export { InterestUl };

const InterestUlWrapper = styled.ul`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-gap: 10px;
`;

const InterestLi = props => {
  return <InterestLiWrapper {...props}>{props.children}</InterestLiWrapper>;
};

export { InterestLi };

const InterestLiWrapper = styled.li`
  list-style: none;
  padding: 5px 10px;
  background: ${props => props.theme.color.ui3};
`;

const InterestCard = props => {
  return (
    <InterestCardWrapper {...props}>
      <Icon icon={props.icon} />
      <CardTitle>{props.children}</CardTitle>
    </InterestCardWrapper>
  );
};

export { InterestCard };

const InterestCardWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.span`
  text-align: center;
  margin-left: 10px;
`;
