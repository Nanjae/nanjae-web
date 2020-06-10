import React from "react";
import styled from "styled-components";
import Home from "./Routes/Home";
import GlobalStyles from "./Styles/GlobalStyles";

const Wrapper = styled.div`
  user-select: none;
`;

export default () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
};
