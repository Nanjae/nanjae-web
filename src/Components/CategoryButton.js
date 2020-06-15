import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const CategoryMenuDiv = styled(Link)`
  display: flex;
  cursor: pointer;
`;

const CategoryMenuBox = styled.div`
  background-color: ${(props) =>
    props.id === props.activeBtn
      ? `rgba(255,104,51,1)`
      : props.id === props.focusBtn
      ? `rgba(31, 31, 31, 1)`
      : `rgba(31, 31, 31, 0)`};
  padding-left: 30px;
  width: 210px;
  transition: background-color 0.3s;
`;

const CategoryMenuText = styled.div`
  padding-left: ${(props) => (props.type === "SUB" ? 20 : 0)}px;
  font-weight: ${(props) => (props.type === "SUB" ? 500 : 900)};
  height: 39px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
`;

const CategoryTriangle = styled.div`
  width: 0px;
  height: 0px;
  border-right: 28px solid
    ${(props) =>
      props.id === props.activeBtn
        ? `rgba(255, 104, 51, 1)`
        : props.id === props.focusBtn
        ? `rgba(31, 31, 31, 1)`
        : `rgba(31, 31, 31, 0)`};
  border-bottom: 28px solid rgba(0, 0, 0, 0);
  transform: rotate(45deg) translate(-5.8px, 14px);
  transition: border-right 0.3s, background-color 0.3s;
`;

const CategoryButton = ({
  buttons,
  id,
  term = -2,
  text = "MENU",
  type = "TITLE",
  typeSub = "DEFAULT",
  focusButton,
  activeButton,
  changeTerm,
}) => {
  return (
    <>
      <CategoryMenuDiv
        onMouseEnter={() => {
          focusButton(id);
        }}
        onMouseLeave={() => {
          focusButton(0);
        }}
        onClick={() => {
          activeButton(id);
          if (term >= 0) {
            changeTerm(term);
          } else {
            window.location.reload();
          }
        }}
      >
        <CategoryMenuBox
          id={id}
          focusBtn={buttons.focusBtn}
          activeBtn={buttons.activeBtn}
          type={type}
          typeSub={typeSub}
        >
          <CategoryMenuText type={type}>{text}</CategoryMenuText>
        </CategoryMenuBox>
        <CategoryTriangle
          id={id}
          focusBtn={buttons.focusBtn}
          activeBtn={buttons.activeBtn}
        />
      </CategoryMenuDiv>
    </>
  );
};

const mapStateToProps = (state) => {
  return { buttons: state.buttons };
};

const mapDispatchToProps = (dispatch) => {
  return {
    focusButton: (focusBtn) => dispatch(actionCreators.focusButton(focusBtn)),
    activeButton: (activeBtn) =>
      dispatch(actionCreators.activeButton(activeBtn)),
    changeTerm: (term) => dispatch(actionCreators.changeTerm(term)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryButton);
