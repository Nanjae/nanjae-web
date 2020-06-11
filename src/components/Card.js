import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  background-color: ${(props) => props.bgColor};
`;

const Inner = styled.div``;

const Card = ({ data }) => {
  return (
    <Wrapper bgColor={data.bgColor}>
      <Inner>{data.id}</Inner>
    </Wrapper>
  );
};

export default Card;
