import React from "react";
import styled from "styled-components";
import Home from "../routes/Home";
import GlobalStyles from "../styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
  user-select: none;
`;

export default () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Home />
        </Wrapper>
      </Router>
    </>
  );
};
