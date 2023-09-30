import { combineReducers } from "@reduxjs/toolkit";
import CaseStudyApi from "../api/case-study";
import blogApi from "../api/blogs";

const rootReducer = combineReducers({
  [CaseStudyApi.reducerPath]: CaseStudyApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
});

export default rootReducer;
