import { TYPES } from "../type";

const initState = {
  name: "tegar",
  isLogin: true,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.LOGOUT:
      return {
        ...state,
        isLogin: action.payload,
      };
    case TYPES.LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export { authReducer };
