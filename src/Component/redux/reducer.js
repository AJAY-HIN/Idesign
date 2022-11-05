import { createReducer } from "reduxsauce";
import { Types } from "./action";
import { Creators } from "./action";

const INITIAL_STATE = {
  list: [],
};

const setProduct = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  return {
    ...state,
    list: [...state.list, action.payload],
  };
};

const HANDLERS = {
  [Types.SET_PRODUCT]: setProduct,
};

export const productReducer = createReducer(INITIAL_STATE, HANDLERS);
