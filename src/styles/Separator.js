import styled from "react-emotion";

const Separator = styled.div`
  height: 10px;
  background: linear-gradient(
    135deg,
    ${props => props.theme.color.brand3} 0%,
    ${props => props.theme.color.brand4} 100%
  );
`;

export default Separator;
