import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import CategoryButton from "./CategoryButton";

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
  color: white;
`;

const Inner = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SiteTitleBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -3px;
`;

const SiteIntroBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SiteIntroText = styled.div`
  :not(:first-child) {
    margin-top: 10px;
  }
`;

const CategoryBox = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Menu = ({ menus, windows }) => {
  return (
    <>
      <Wrapper menuBool={menus.menuBool} windowHeight={windows.windowHeight}>
        <Inner>
          <SiteTitleBox>Dev.NanJae</SiteTitleBox>
          <SiteIntroBox>
            <SiteIntroText>난재의 포트폴리오 사이트입니다.</SiteIntroText>
            <SiteIntroText>자유롭게 구경해주세요!</SiteIntroText>
          </SiteIntroBox>
          <CategoryBox>
            <CategoryButton
              id={1}
              term={-1}
              text={"PORTFOLIO"}
              type={"TITLE"}
            />
            <CategoryButton id={2} term={0} text={"All"} type={"SUB"} />
            <CategoryButton id={3} term={1} text={"React"} type={"SUB"} />
            <CategoryButton id={4} term={2} text={"Full-Stack"} type={"SUB"} />
            <CategoryButton id={5} term={99} text={"Others"} type={"SUB"} />
            <CategoryButton
              id={6}
              text={"ABOUT"}
              type={"TITLE"}
              subTybe={"SOLO"}
            />
            <CategoryButton
              id={7}
              text={"CONTACT"}
              type={"TITLE"}
              subTybe={"SOLO"}
            />
          </CategoryBox>
        </Inner>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { menus: state.menus, windows: state.windows };
};

export default connect(mapStateToProps)(Menu);
