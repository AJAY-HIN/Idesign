import { createStore, applyMiddleWare } from "redux";
import rootReducer from "./index";

export const store = createStore(rootReducer);
