import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 50;
  width: 300px;
  transform: translateX(${(props) => (props.enterMenu ? "0px" : "-270px")});
  height: ${(props) => props.windowHeight}px;
  transition: transform 0.3s;
  display: flex;
  justify-content: flex-start;
`;

const Inner = styled.div`
  width: 280px;
  background-color: #3a3a3a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ windowHeight, enterMenu, setEnterMenu }) => {
  return (
    <>
      <Wrapper
        onMouseEnter={() => {
          setEnterMenu(true);
        }}
        onMouseLeave={() => {
          setEnterMenu(false);
        }}
        enterMenu={enterMenu}
        windowHeight={windowHeight}
      >
        <Inner>메뉴 테스트</Inner>
      </Wrapper>
    </>
  );
};
