import "./styles/style.css";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import { BrowserRouter } from 'react-router-dom';
// import App from "./components/App";
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const state = window.__STATE__;
let store = configStore(state);
console.log("store on client",store.getState());

const rootEl = document.getElementById("app");

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    rootEl
);
