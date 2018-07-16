import React from "react";

import styled from "react-emotion";
import Icon from "./Icon";

const List = props => {
  return (
    <ListWrapper {...props}>
      {props.name && (
        <ListTitle>
          <ListCard icon={props.icon} iconType={props.iconType}>
            {props.name}
          </ListCard>
        </ListTitle>
      )}
      <ListUl>
        {props.items.map((item, i) => <ListLi key={i}>{item}</ListLi>)}
      </ListUl>
    </ListWrapper>
  );
};

export { List };

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.color.ui2};
  @media (${props => props.theme.mq.mobile}) {
    flex-direction: column;
  }
`;

const ListTitle = props => {
  return <ListTitleWrapper {...props}>{props.children}</ListTitleWrapper>;
};

export { ListTitle };

const ListTitleWrapper = styled.div`
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

const ListUl = props => {
  return <ListUlWrapper {...props}>{props.children}</ListUlWrapper>;
};

export { ListUl };

const ListUlWrapper = styled.ul`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(135px, 1fr));
  grid-gap: 10px;
`;

const ListLi = props => {
  return <ListLiWrapper {...props}>{props.children}</ListLiWrapper>;
};

export { ListLi };

const ListLiWrapper = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13px;
  padding: 5px 10px;
  background: ${props => props.theme.color.ui3};
`;

const ListCard = props => {
  return (
    <ListCardWrapper {...props}>
      <Icon icon={props.icon} iconType={props.iconType} />
      <CardTitle>{props.children}</CardTitle>
    </ListCardWrapper>
  );
};

export { ListCard };

const ListCardWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardTitle = styled.span`
  text-align: center;
  margin-left: 10px;
`;
