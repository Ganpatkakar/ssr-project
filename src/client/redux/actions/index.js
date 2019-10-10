import {enums} from "../enums";
import axios from "axios";

export const CommonAction = () => dispatch => {
    dispatch({
        type: enums.INITIAL_STATE,
        payload: true
    });
};

export const TestAction = () => async (dispatch) => {
    try {
        dispatch({type: 'Fetch_Data'});
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        dispatch({
            type: enums.TEST_STATE,
            payload: res.data
        });
    } catch(err) {
        console.log(err);
        dispatch({type: 'Fetch_Data_Failed'});
    }

};

export const Incrementer = () => dispatch => {
    dispatch({
        type: enums.INCREMENTER,
        payload: 1
    });
};

export const Decrementer = () => dispatch => {
    dispatch({
        type: enums.DECREMENTER,
        payload: 1
    });
};