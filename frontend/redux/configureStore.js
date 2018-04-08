import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import configureReducers from "./configureReducers";

const configureStore = (initialState) =>
  createStore(
    configureReducers(),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
      )
    )
  );

export default configureStore;
