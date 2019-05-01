import { createStore, applyMiddleware, compose } from 'redux';
import commonReducer from "./reducers/commonReducer";

let initialState = {};

let middleware = [];

export default createStore(commonReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);