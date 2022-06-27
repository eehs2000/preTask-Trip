import styled, { keyframes } from "styled-components";
import PlayStoreImg from "../assets/play-store2x.png";
import AppStoreImg from "../assets/badge-apple4x.png";
import useFadeIn from "../hooks/useFadeIn";
import { Fade } from "../types/fade";

const Award: React.FC = () => {
  const [opacity, transY] = useFadeIn();
  return (
    <>
      <AwardContainer opacity={opacity} transY={transY}>
        <GoogleAward>
          2018 구글 플레이스토어
          <br />
          올해의 앱 최우수상 수상
        </GoogleAward>

        <AppleAward>
          2018 애플 앱스토어
          <br />
          오늘의 여행앱 선정
        </AppleAward>
      </AwardContainer>
    </>
  );
};

const AwardContainer = styled.div<Fade>`
  display: flex;
  margin: 50px 0 140px 0;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
  color: rgba(58, 58, 58, 0.8);
  opacity: ${(props) => (props.opacity ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 1000ms ease-in-out 0ms;
`;

const AppleAward = styled.div`
  background-image: url(${AppStoreImg});
  disply: inline-blcok;
  height: 54px;
  padding: 5px 0 5px 62px;
  margin-right: 39px;
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 54px 54px;
  line-height: 22px;
  white-space: nowrap;
`;

const GoogleAward = styled(AppleAward)`
  background-image: url(${PlayStoreImg});
`;

export default Award;
