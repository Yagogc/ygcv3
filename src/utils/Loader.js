import React from "react";
import styled, { keyframes } from "react-emotion";

const Loader = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div`
  font-size: 10px;
  border-top: 0.8em solid rgba(185, 108, 255, 0.2);
  border-right: 0.8em solid rgba(185, 108, 255, 0.2);
  border-bottom: 0.8em solid rgba(185, 108, 255, 0.2);
  border-left: 0.8em solid rgb(185, 108, 255);
  transform: translateZ(0);
  animation: ${spin} 1.1s infinite linear;
  border-radius: 50%;
  width: 5em;
  height: 5em;
`;
