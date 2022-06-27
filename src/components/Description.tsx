import styled from "styled-components";
import CountUp from "react-countup";
import useFadeIn from "../hooks/useFadeIn";
import { Fade } from "../types/fade";

const Description: React.FC = () => {
  const [opacity, transY] = useFadeIn();
  return (
    <>
      <DescriptionContainer opacity={opacity} transY={transY}>
        <CountUp start={0} end={700} duration={1} useEasing={true}>
          {({ countUpRef }) => (
            <DescriptionText>
              <strong>
                <span ref={countUpRef}></span>만명의
              </strong>
              의 여행자
            </DescriptionText>
          )}
        </CountUp>
        <CountUp start={0} end={100} duration={1}>
          {({ countUpRef }) => (
            <DescriptionText>
              <strong>
                <span ref={countUpRef}></span>만 개
              </strong>
              의 여행 리뷰
            </DescriptionText>
          )}
        </CountUp>
        <CountUp start={0} end={470} duration={1}>
          {({ countUpRef }) => (
            <DescriptionText>
              <strong>
                <span ref={countUpRef}></span>만 개
              </strong>
              의 여행 일정
            </DescriptionText>
          )}
        </CountUp>
      </DescriptionContainer>
    </>
  );
};

const DescriptionContainer = styled.div<Fade>`
  maring-bottom: 50px;
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 0ms;
`;

const DescriptionText = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  font-family: sans-sarif;
  color: #3a3a3a;
  letter-spacing: -1px;
`;

export default Description;
