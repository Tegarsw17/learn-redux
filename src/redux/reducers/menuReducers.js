import { TYPES } from "../type";

const initState = {
  menu: [],
};

const menuReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_MENU:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export { menuReducer };
