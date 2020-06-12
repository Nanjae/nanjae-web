import React from "react";
import styled from "styled-components";
import { DefaultRoute } from "./Routes";
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
          <DefaultRoute />
        </Wrapper>
      </Router>
    </>
  );
};
