import React, { useState } from "react";
import styled from "styled-components";
import icon_plus from "../Assets/Icons/icon_plus.png";

const Wrapper = styled.div`
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
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

const IconBox = styled.div`
  position: absolute;
  z-index: ${(props) => (props.focused ? 50 : 0)};
  opacity: ${(props) => (props.focused ? 1 : 0)};
  background-color: #ff6833;
  width: 34px;
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${(props) => (props.focused ? "-53px" : "0px")});
  border-radius: 100%;
  transition: z-index 0.4s, transform 0.4s, opacity 0.4s;
`;

const IconPlus = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: center;
  width: 20px;
  height: 20px;
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
  transition: z-index 0.4s, transform 0.4s;
`;

const TextDiv = styled.div`
  position: absolute;
  width: ${(props) => props.cardWidth}px;
  height: ${(props) => props.cardWidth * 0.75}px;
  z-index: ${(props) => (props.focused ? 50 : 0)};
  transform: translateY(${(props) => (props.focused ? "70px" : "0px")});
  background-color: #1f1f1f;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: z-index 0.4s, transform 0.4s;
`;

const TextInner = styled.div`
  width: 100%;
  height: 140px;
  opacity: ${(props) => (props.focused ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  transition: opacity 0.4s;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.div`
  width: 90%;
  height: 20px;
  padding: 5px;
  font-size: 18px;
  line-height: 20px;
  color: white;
  text-align: center;
`;

const StringText = styled.div`
  width: 90%;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: #737373;
  text-align: center;
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
          <TextInner focused={focused}>
            <TextBox>
              <TitleText>{data.titleText}</TitleText>
              <StringText>{data.stringText}</StringText>
            </TextBox>
          </TextInner>
        </TextDiv>
        <ImageDiv
          cardWidth={cardWidth}
          rowMaxCount={rowMaxCount}
          bgColor={data.bgColor}
          focused={focused}
        ></ImageDiv>
        <IconBox focused={focused}>
          <IconPlus url={icon_plus} />
        </IconBox>
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
