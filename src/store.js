import { createStore, combineReducers } from "redux";

const TOGGLE_MENU = "TOGGLE_MENU";
const RESIZE_WINDOW = "RESIZE_WINDOW";
const FOCUS_BUTTON = "FOCUS_BUTTON";
const ACTIVE_BUTTON = "ACTIVE_BUTTON";
const CHANGE_TERM = "CHANGE_TERM";

const toggleMenu = (menuBool) => {
  return {
    type: TOGGLE_MENU,
    menuBool: menuBool,
  };
};

const resizeWindow = (windowWidth, windowHeight) => {
  return {
    type: RESIZE_WINDOW,
    windowWidth: windowWidth,
    windowHeight: windowHeight,
  };
};

const focusButton = (focusBtn) => {
  return {
    type: FOCUS_BUTTON,
    focusBtn: focusBtn,
  };
};

const activeButton = (activeBtn) => {
  return {
    type: ACTIVE_BUTTON,
    activeBtn: activeBtn,
  };
};

const changeTerm = (term) => {
  return {
    type: CHANGE_TERM,
    term: term,
  };
};

const menuState = {
  menuBool: false,
};

const windowState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};

const btnState = {
  focusBtn: 0,
  activeBtn: 1,
};

const termState = {
  term: -1,
};

const menus = (state = menuState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        menuBool: action.menuBool,
      };
    default:
      return state;
  }
};

const windows = (state = windowState, action) => {
  switch (action.type) {
    case RESIZE_WINDOW:
      return {
        windowWidth: action.windowWidth,
        windowHeight: action.windowHeight,
      };
    default:
      return state;
  }
};

const buttons = (state = btnState, action) => {
  switch (action.type) {
    case FOCUS_BUTTON:
      return {
        focusBtn: action.focusBtn,
        activeBtn: state.activeBtn,
      };
    case ACTIVE_BUTTON:
      return {
        focusBtn: state.focusBtn,
        activeBtn: action.activeBtn,
      };
    default:
      return state;
  }
};

const terms = (state = termState, action) => {
  switch (action.type) {
    case CHANGE_TERM:
      return {
        term: action.term,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({ menus, windows, buttons, terms });
const store = createStore(reducer);

export const actionCreators = {
  toggleMenu,
  resizeWindow,
  focusButton,
  activeButton,
  changeTerm,
};

export default store;
