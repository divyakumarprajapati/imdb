import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieReducer";
import { combineReducers } from "redux";

const reducer = combineReducers({
  movieReducer,
});

const store = configureStore({ reducer });

export default store;
