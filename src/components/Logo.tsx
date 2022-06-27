import styled from "styled-components";
import LogoImage from "../assets/triple2x.png";
import useFadeIn from "../hooks/useFadeIn";
import { Fade } from "../types/fade";

const Logo: React.FC = () => {
  const [opacity, transY] = useFadeIn();

  return (
    <Wrapper opacity={opacity} transY={transY}>
      <LogoContainer />
      <LogoText>2021년 12월 기준</LogoText>
    </Wrapper>
  );
};

const Wrapper = styled.div<Fade>`
  padding: 150px 0 0;
  width: 400px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 0ms;
`;

const LogoContainer = styled.div`
  width: 400px;
  height: 338px;
  background-image: url(${LogoImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const LogoText = styled.p`
  margin-top: -65px;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  font-weight: bold;
  text-align: center;
  font-size: 15px;
`;

export default Logo;
