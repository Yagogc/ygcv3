import React, { Component } from "react";
import styled from "react-emotion";
import logo from "../assets/logo@2x.png";
import qr from "../assets/qr.svg";
import IconLogo from "../assets/Icon";
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
            <Input
              type="radio"
              id="logo"
              name="logo"
              defaultChecked
              onClick={() => this.toggleImg(logo)}
            />
            <Label htmlFor="logo">
              <ImgLogo>
                <IconLogo />
              </ImgLogo>
            </Label>

            <Input
              type="radio"
              id="qr"
              name="logo"
              onClick={() => this.toggleImg(qr)}
            />
            <Label htmlFor="qr">
              <Icon icon="qrcode" />
            </Label>
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

const Label = styled.label`
  border: none;
  color: white;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.color.ui4};
  }
`;
const Input = styled.input`
  display: none;
  &:checked + label {
    background: ${props => props.theme.color.ui2};
  }
`;

const ImgLogo = styled.span`
  width: 22px;
  color: white;
  vertical-align: -0.125em;
  display: flex;
`;
