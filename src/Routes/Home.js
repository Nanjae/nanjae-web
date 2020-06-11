import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Menu from "../components/Menu/Menu";
import { useMove } from "react-use-gesture";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  margin-left: 10px;
  height: fit-content;
  transform: translateX(${(props) => (props.menuBool ? "270px" : "0px")});
  display: flex;
  flex-direction: column;
  transition: transform 0.4s;
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

const Home = ({ menus, toggleMenu, resizeWindow }) => {
  useEffect(() => {
    const handleResize = () => {
      resizeWindow(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const bind = useMove(({ xy, movement }) => {
    if (movement[0] <= 0) {
      if (xy[0] <= 40) {
        toggleMenu(true);
      }
    } else {
      if (xy[0] > 40) {
        toggleMenu(false);
      }
    }
  });

  return (
    <>
      <Wrapper {...bind()}>
        <Menu />
        <ContentWrapper menuBool={menus.menuBool}>
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

const mapStateToProps = (state) => {
  return { menus: state.menus, windows: state.windows };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (menuBool) => dispatch(actionCreators.toggleMenu(menuBool)),
    resizeWindow: (windowWidth, windowHeight) =>
      dispatch(actionCreators.resizeWindow(windowWidth, windowHeight)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
