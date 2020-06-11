import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "./Card";
import CardData from "./CardData";

const Wrapper = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  transition: transform 0.4s;
  transform: translateX(${(props) => (props.menuBool ? "270px" : "0px")});
`;

const TopDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
`;

const CenterInner = styled.div`
  height: fit-content;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardRowDiv = styled.div`
  width: ${(props) => props.windowWidth - 10}px;
  height: ${(props) => (props.windowWidth - 10) * 0.1875}px;
  display: flex;
`;

const BottomDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = ({ menus, windows }) => {
  const rowArray = new Array(Math.ceil(CardData.length / 4)).fill(null);

  return (
    <>
      <Wrapper menuBool={menus.menuBool}>
        <TopDiv>탑 테스트</TopDiv>
        <CenterDiv>
          <CenterInner>
            {rowArray.map((_, index) => {
              return (
                <CardRowDiv windowWidth={windows.windowWidth} key={index}>
                  <Card data={CardData[index * 4 + 0]} />
                  <Card data={CardData[index * 4 + 1]} />
                  <Card data={CardData[index * 4 + 2]} />
                  <Card data={CardData[index * 4 + 3]} />
                </CardRowDiv>
              );
            })}
          </CenterInner>
        </CenterDiv>
        <BottomDiv>바텀 테스트</BottomDiv>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { menus: state.menus, windows: state.windows };
};

export default connect(mapStateToProps)(Content);
