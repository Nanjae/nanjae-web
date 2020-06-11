import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Wrapper = styled.div`
  position: fixed;
  z-index: 50;
  width: 280px;
  height: ${(props) => props.windowHeight}px;
  display: flex;
  justify-content: flex-start;
  background-color: #3a3a3a;
  transform: translateX(${(props) => (props.menuBool ? "0px" : "-270px")});
  transition: transform 0.4s;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = ({ menus, windows }) => {
  return (
    <>
      <Wrapper menuBool={menus.menuBool} windowHeight={windows.windowHeight}>
        <Inner>메뉴 테스트</Inner>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { menus: state.menus, windows: state.windows };
};

export default connect(mapStateToProps)(Menu);
