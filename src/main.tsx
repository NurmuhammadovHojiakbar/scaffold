import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.tsx";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
