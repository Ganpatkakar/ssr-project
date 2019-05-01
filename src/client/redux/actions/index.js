import { INITIAL_STATE,
    INCREMENTER,
    DECREMENTER} from "../enums";

export function CommonAction (data) {
    return { type: INITIAL_STATE, payload: data }
};

export function Incrementer (data) {
    return { type: INCREMENTER, payload: data }
};

export function Decrementer (data) {
    return { type: DECREMENTER, payload: data }
};