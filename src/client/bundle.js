import "./styles/responsive.css";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import configStore from "./redux/store";
import {BrowserRouter} from 'react-router-dom';
// import App from "./components/App";
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';

const state = window.__STATE__;
let store = configStore(state);
const rootEl = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  rootEl
);
