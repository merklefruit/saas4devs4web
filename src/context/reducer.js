import { SET_THEME } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem("theme", action.theme);
      return {
        ...state,
        theme: action.theme,
      };

    default:
      return state;
  }
};

export default reducer;
