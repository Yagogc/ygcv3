import React, { Component } from "react";
import styled from "react-emotion";
import logo from "../assets/logo.png";
import qr from "../assets/qr.svg";
import IconLogo from "../assets/Icon.svg";
import Icon from "../styles/Icon";

export default class Logo extends Component {
  state = {
    logo: logo
  };

  toggleImg = img => {
    if (this.state.logo === img) {
      return;
    }
    this.setState({
      logo: img
    });
  };

  render() {
    return (
      <Wrapper>
        <LogoImg src={this.state.logo} alt="Logo" />
        <Toggle>
          <ButtonGroup>
            <Button
              onClick={() => this.toggleImg(logo)}
              isActive={this.state.logo === logo}
            >
              <ImgLogo src={IconLogo} alt="logo" />
            </Button>
            <Button
              onClick={() => this.toggleImg(qr)}
              isActive={this.state.logo === qr}
            >
              <Icon icon="qrcode" />
            </Button>
          </ButtonGroup>
        </Toggle>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  text-align: center;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 128px;
`;
const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ButtonGroup = styled.div`
  background: ${props => props.theme.color.ui3};
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const Button = styled.button`
  background: ${props => (props.isActive ? props.theme.color.ui2 : "none")};
  border: none;
  color: white;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.ui4};
  }
`;

const ImgLogo = styled.img`
  width: 22px;
  color: white;
  vertical-align: -0.125em;
`;
