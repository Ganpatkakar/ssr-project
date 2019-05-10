import "./styles/style.css";
import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import configStore from "./redux/store";
import App from "./components/App";

const state = window.__STATE__;
let store = configStore(state);
console.log("store on client",store.getState());

const rootEl = document.getElementById("app");

hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);
