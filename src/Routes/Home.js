import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import Menu from "../Menu/Menu";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  margin-left: 10px;
  height: fit-content;
  transform: translateX(${(props) => (props.enterMenu ? "270px" : "0px")});
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
`;

const ContentTopDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentCenterDiv = styled.div`
  height: 1200px;
`;

const ContentCenterInner = styled.div`
  height: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentBottomDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [enterMenu, setEnterMenu] = useState(false);
  const { windowHeight } = useWindowDimensions();

  return (
    <>
      <Wrapper>
        <Menu
          windowHeight={windowHeight}
          enterMenu={enterMenu}
          setEnterMenu={setEnterMenu}
        />
        <ContentWrapper enterMenu={enterMenu}>
          <ContentTopDiv>탑 테스트</ContentTopDiv>
          <ContentCenterDiv>
            <ContentCenterInner>센터 테스트</ContentCenterInner>
          </ContentCenterDiv>
          <ContentBottomDiv>바텀 테스트</ContentBottomDiv>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};
