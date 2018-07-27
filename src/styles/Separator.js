import styled from "react-emotion";

const Separator = styled.div`
  height: 10px;
  opacity: 0.7;
  background: ${props => props.theme.gradient()};
`;

export default Separator;
