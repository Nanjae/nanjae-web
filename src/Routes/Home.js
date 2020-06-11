import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Menu from "../components/Menu";
import { useMove } from "react-use-gesture";
import Content from "../components/Content";

const Wrapper = styled.div`
  overflow-x: hidden;
`;

const Home = ({ windows, toggleMenu, resizeWindow }) => {
  // console.log(windows);

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
      if (xy[0] > 280) {
        toggleMenu(false);
      }
    }
  });

  return (
    <>
      <Wrapper {...bind()}>
        <Menu />
        <Content />
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { windows: state.windows };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: (menuBool) => dispatch(actionCreators.toggleMenu(menuBool)),
    resizeWindow: (windowWidth, windowHeight) =>
      dispatch(actionCreators.resizeWindow(windowWidth, windowHeight)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
