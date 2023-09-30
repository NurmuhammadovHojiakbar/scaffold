import { combineReducers } from "@reduxjs/toolkit";
import CaseStudyApi from "../api/case-study";
import blogApi from "../api/blogs";
import servicesApi from "../api/services";

const rootReducer = combineReducers({
  [CaseStudyApi.reducerPath]: CaseStudyApi.reducer,
  [blogApi.reducerPath]: blogApi.reducer,
  [servicesApi.reducerPath]: servicesApi.reducer,
});

export default rootReducer;
