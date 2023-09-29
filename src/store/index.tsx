import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import logger from "redux-logger";
import rootReducer from "./reducers";
import CaseStudyApi from "./api/case-study";

const store = configureStore({
  reducer: rootReducer,
  middleware: (gm) =>
    gm({ serializableCheck: false }).concat(logger, CaseStudyApi.middleware),
  devTools: false,
});

setupListeners(store.dispatch);

export default store;
