import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Card from "./Card";
import CardData, { getSortedCardData } from "./CardData";

const Wrapper = styled.div`
  height: ${(props) =>
    ((props.windowWidth - 20) * 0.75 * props.columnMaxCount) /
      props.rowMaxCount +
    140}px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  transition: transform 0.4s;
  transform: translateX(${(props) => (props.menuBool ? "270px" : "0px")});
  align-items: center;
`;

const TopDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterDiv = styled.div`
  position: relative;
  width: ${(props) => props.windowWidth - 20}px;
  height: ${(props) =>
    ((props.windowWidth - 20) * 0.75 * props.columnMaxCount) /
    props.rowMaxCount}px;
  background-color: lightgray;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const BottomDiv = styled.div`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = ({ menus, windows, terms }) => {
  let sortedCardData = getSortedCardData(terms.term);

  const rowMaxCount =
    windows.windowWidth >= 1700
      ? 5
      : windows.windowWidth >= 1280
      ? 4
      : windows.windowWidth >= 850
      ? 3
      : windows.windowWidth >= 430
      ? 2
      : 1;

  const columnMaxCount = Math.ceil(CardData.length / rowMaxCount);

  const cardWidth = (windows.windowWidth - 20) / rowMaxCount;

  return (
    <>
      <Wrapper
        windowWidth={windows.windowWidth}
        rowMaxCount={rowMaxCount}
        columnMaxCount={columnMaxCount}
        menuBool={menus.menuBool}
      >
        <TopDiv>탑 테스트</TopDiv>
        <CenterDiv
          windowWidth={windows.windowWidth}
          rowMaxCount={rowMaxCount}
          columnMaxCount={columnMaxCount}
        >
          {CardData.map((data, index) => {
            const sortedIndex = sortedCardData.findIndex(
              (x) => x.id === data.id
            );
            return (
              <Card
                key={index}
                cardWidth={cardWidth}
                data={data}
                rowMaxCount={rowMaxCount}
                termBool={terms.term >= 1 ? data.term === terms.term : true}
                sortedIndex={sortedIndex}
              />
            );
          })}
        </CenterDiv>
        <BottomDiv>바텀 테스트</BottomDiv>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { menus: state.menus, windows: state.windows, terms: state.terms };
};

export default connect(mapStateToProps)(Content);
