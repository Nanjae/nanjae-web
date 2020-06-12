import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  overflow: hidden;
`;

const OpacityDiv = styled.div`
  position: absolute;
  opacity: ${(props) => (props.focused ? 0 : 0.3)};
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  z-index: ${(props) => (props.focused ? 50 : 0)};
  display: flex;
  align-items: flex-end;
  background-color: white;
  transform: translateY(${(props) => (props.focused ? "-70px" : "0px")});
  transition: z-index 0.4s, transform 0.4s, opacity 0.4s;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  z-index: ${(props) => (props.focused ? 50 : 0)};
  display: flex;
  align-items: flex-end;
  background-color: ${(props) => props.bgColor};
  transform: translateY(${(props) => (props.focused ? "-70px" : "0px")});
  transition: z-index 0.4s, transform 0.4s, opacity 0.4s;
`;

const TextDiv = styled.div`
  position: absolute;
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  z-index: ${(props) => (props.focused ? 50 : 0)};
  transform: translateY(${(props) => (props.focused ? "70px" : "0px")});
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  transition: z-index 0.4s, transform 0.4s;
`;

const TextInner = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ rowMaxCount, data, cardWidth }) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Wrapper
        cardWidth={cardWidth}
        focused={focused}
        onMouseEnter={() => {
          setFocused(true);
        }}
        onMouseLeave={() => {
          setFocused(false);
        }}
        rowMaxCount={rowMaxCount}
      >
        <TextDiv
          cardWidth={cardWidth}
          rowMaxCount={rowMaxCount}
          focused={focused}
        >
          <TextInner>{data.id}</TextInner>
        </TextDiv>
        <ImageDiv
          cardWidth={cardWidth}
          rowMaxCount={rowMaxCount}
          bgColor={data.bgColor}
          focused={focused}
        ></ImageDiv>
        <OpacityDiv
          cardWidth={cardWidth}
          rowMaxCount={rowMaxCount}
          focused={focused}
        ></OpacityDiv>
      </Wrapper>
    </>
  );
};

export default Card;
