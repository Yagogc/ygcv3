import styled from "react-emotion";
import { darken } from "polished";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const Grid = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-auto-rows: ${props => (props.hasfooter ? "auto 1fr" : "auto")};
  grid-gap: 10px;
  align-content: start;
  ${props => (props.padded ? `margin: 0 10px;` : "")};

  @media (${props => props.theme.mq.desktop}) {
  }
`;

const Header = styled.div`
  padding: 5px ${props => props.theme.ws.padding};
  background: ${props => props.theme.color.ui3};
  font-style: ${props => (props.itext ? "italic;" : "inherit")};
  ${props => (props.stext ? "font-size: 14px;" : "")};
`;
const Footer = styled.div`
  padding: 5px ${props => props.theme.ws.padding};
  background: ${props => props.theme.color.ui3};
  text-align: right;
  ${props => (props.stext ? "font-size: 14px;" : "")};
`;

const Title = styled.h1`
  font-size: 18px;
  display: inline-block;
`;

const Company = styled.div`
  font-size: 14px;
`;

const CompanyName = styled.span`
  font-size: inherit;
`;
const Label = styled.span`
  font-size: 14px;
  padding: 5px 10px;
  background: ${props => props.theme.color.ui3};
`;

const Description = styled.p`
  text-align: justify;
  font-size: 14px;
  padding: 5px;
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
  background: ${props => props.theme.color.ui3};
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
    ),
    url(${props => (props.bg ? props.bg : "")});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  justify-content: end;
  align-items: end;
  grid-auto-flow: column;
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  position: absolute;
  object-position: top;
  top: 0;
  width: 100%;
`;
const ImgLink = styled.a`
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

const LinkInternal = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.text1};
  cursor: pointer;
`;

const LinkExternal = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.text1};
  font-size: 18px;
  cursor: pointer;
`;
const Card = {
  Grid: Grid,
  Header: Header,
  Footer: Footer,
  Title: Title,
  Company: Company,
  CompanyName: CompanyName,
  SkillList: SkillList,
  SkillItem: SkillItem,
  WrapperImg,
  Img,
  ImgLink: ImgLink,
  LinkInternal: LinkInternal,
  LinkExternal: LinkExternal,
  Icon: styled(Icon)``,
  Label: Label,
  RoleIcon: styled(Icon)``,
  Date: styled.span``,
  DateIcon: styled(Icon)``,
  StarDate: styled.span``,
  EndDate: styled.span``,
  Description: Description
};

export default Card;
