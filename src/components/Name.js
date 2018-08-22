import React from "react";
import styled from "react-emotion";
import SplitText from "react-pose-text";

const Name = () => {
  return (
    <Wrapper initialPose="exit" pose="enter" charPoses={charPoses}>
      Yago Gonzalez
    </Wrapper>
  );
};

export default Name;

const Wrapper = styled(SplitText)`
  font-family: "Marck Script", "Open sans", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue",
    sans-serif;
  font-size: 26px;
`;

const charPoses = {
  exit: {
    opacity: 0,
    y: -100,
    scale: 0
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    delay: ({ charIndex }) => charIndex * 30 + 400,
    transition: {
      type: "tween",
      velocity: 1000
    }
  }
};
