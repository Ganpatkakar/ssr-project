import { INITIAL_STATE,
    TEST_STATE,
    INCREMENTER,
    DECREMENTER} from "../enums";

export default function commonReducer(state = {}, action) {
    switch (action.type) {
        case INITIAL_STATE:
            return {
                ...state,
                number: 0,
                ready: action.payload
            };
        case INCREMENTER:
            return {
                ...state,
                number: state.number + action.payload
            };
        case DECREMENTER:
            return {
                ...state,
                number: state.number - action.payload
            };
        default:
            return state
    }
}