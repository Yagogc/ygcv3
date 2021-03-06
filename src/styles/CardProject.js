import styled from "react-emotion";
import { darken } from "polished";
import Icon from "./Icon";

const Wrapper = styled.div`
  position: relative;
  background: ${props => props.theme.color.ui3};
  padding: 10px;
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 10px;
  align-content: start;

  @media (${props => props.theme.mq.desktop}) {
  }
`;

const Title = styled.h1`
  font-size: 18px;
`;
const Company = styled.div`
  font-size: 14px;
`;
const CompanyName = styled.span`
  font-size: inherit;
`;

const SkillList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 10px;
  font-size: 12px;
`;
const SkillItem = styled.li`
  list-style: none;
  text-align: center;
  background: ${props => props.theme.color.ui4};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;

const WrapperImg = styled.div`
  min-height: ${props => (props.small ? "100px" : "200px")};
  max-height: ${props => (props.small ? "100px" : "200px")};
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  display: grid;
  position: relative;
  grid-gap: 10px;
  overflow: hidden;
  justify-content: end;
  align-items: end;
  grid-auto-flow: column;
`;
const Img = styled.img`
  position: absolute;
  object-position: top;
  top: 0;
  width: 100%;
`;
const Link = styled.a`
  color: ${props => props.theme.color.text1};
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  background: ${props =>
    props.git ? darken(0.2, props.theme.brands.github) : props.theme.color.ui4};
  padding: 5px 10px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  &:hover {
    background: ${props =>
      props.git ? props.theme.brands.github : props.theme.color.ui4};
  }
`;

const Card = {
  Wrapper: Wrapper,
  Title: Title,
  Company: Company,
  CompanyName: CompanyName,
  SkillList: SkillList,
  SkillItem: SkillItem,
  WrapperImg,
  Img,
  Link: Link,
  Icon: styled(Icon)``,
  Info: styled.div`
    font-size: 12px;
    display: grid;
    grid-gap: 5px;
    background: ${props => props.theme.color.ui4};
    padding: 5px 10px;

    @media (${props => props.theme.mq.mobile}) {
      grid-auto-rows: 1fr;
    }

    @media (${props => props.theme.mq.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  Role: styled.span``,
  RoleIcon: styled(Icon)``,
  Date: styled.span``,
  DateIcon: styled(Icon)``,
  StarDate: styled.span``,
  EndDate: styled.span``,
  Description: styled.p`
    text-align: left;
    font-size: 14px;
    text-indent: 1rem;
    padding: 5px;
  `
};

export { Card };
