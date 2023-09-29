import { combineReducers } from "@reduxjs/toolkit";
import CaseStudyApi from "../api/case-study";

const rootReducer = combineReducers({
  [CaseStudyApi.reducerPath]: CaseStudyApi.reducer,
});

export default rootReducer;
