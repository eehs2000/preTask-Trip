import React from "react";
import styled from "styled-components";
import Award from "./components/Award";
import Description from "./components/Description";
import Logo from "./components/Logo";


function App() {
  return (
    <>
      <ContentContainer>
        <Logo />
        <InnerContainer>
          <Description />
          <Award />
        </InnerContainer>
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  aligh-items: center;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const InnerContainer = styled.div`
  margin-left: 223px;
  padding-top: 150px;
`;

export default App;
