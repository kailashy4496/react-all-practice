import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import { reducers } from "./reducers/amountReducer";


export const store = createStore(reducers, {}, applyMiddleware (thunk))