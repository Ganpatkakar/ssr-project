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
  } catch (err) {
    console.log(err);
    dispatch({type: 'Fetch_Data_Failed'});
  }

};

export const ItemsFetch = () => async (dispatch) => {
  try {
    dispatch({type: 'Fetch_Data'});
    const res = await axios.get('http://localhost:3000/api/items/');
    dispatch({
      type: enums.ITEMS_FETCH,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({type: 'Fetch_Data_Failed'});
  }
};

export const SingleItemFetch = (id) => async (dispatch) => {
  try {
    dispatch({type: 'Fetch_Data'});
    const url = `http://localhost:3000/api/single-item/${id}`;
    const res = await axios.get(url);
    dispatch({
      type: enums.SINGLE_ITEM_FETCH,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({type: 'Fetch_Data_Failed'});
  }
};

export const SingleItemRemoveData = () => async (dispatch) => {
  dispatch({type: enums.SINGLE_ITEM_Remove,});
};
