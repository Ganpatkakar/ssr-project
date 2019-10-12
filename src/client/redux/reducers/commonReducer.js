import {enums} from "../enums";

export default function commonReducer(state = {}, action) {
  switch (action.type) {
    case enums.INITIAL_STATE:
      return {
        ...state,
        number: 0,
        ready: action.payload
      };
    case enums.TEST_STATE:
      return {
        ...state,
        userData: action.payload
      };
    case enums.ITEMS_FETCH:
      return {
        ...state,
        items_list: action.payload
      };
    case enums.SINGLE_ITEM_FETCH:
      return {
        ...state,
        item: action.payload
      };
    case enums.SINGLE_ITEM_Remove:
      return {
        ...state,
        item: {}
      };
    case 'Fetch_Data':
      return {
        fetching: true
      };
    case 'Fetch_Data_Failed':
      return {
        fetching: "failed"
      };
    default:
      return state
  }
}