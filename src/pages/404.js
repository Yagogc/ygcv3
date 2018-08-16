import React from "react";
import blackhole from "../assets/blackhole.svg";
import styled from "react-emotion";
import Container from "./../styles/Container";
import { Link as link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Page not found!</h1>
        <Img src={blackhole} alt="Blackhole" />
        <p>
          But you've found a <b>black hole</b>!
        </p>
        <p>
          <Link to="/">Go back home</Link> before you fall into the event
          horizon!
        </p>
      </Wrapper>
    </Container>
  );
};
export default Error404;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  align-items: center;
`;

const Img = styled.img`
  max-width: 300px;
  width: 100%;
  padding: 10px 0;
  pointer-events: none;
`;

const Link = styled(link)`
  color: white;
  font-weight: bold;
`;
