import { createStore, combineReducers } from "redux";

const TOGGLE_MENU = "TOGGLE_MENU";
const RESIZE_WINDOW = "RESIZE_WINDOW";

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

const menuState = {
  menuBool: false,
};

const windowState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
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

const reducer = combineReducers({ menus, windows });
const store = createStore(reducer);

export const actionCreators = {
  toggleMenu,
  resizeWindow,
};

export default store;
