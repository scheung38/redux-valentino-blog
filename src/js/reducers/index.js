import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};

// To determine how to calculate  the next state
function rootReducer(state = initialState, action) {

    // Does nothing, simply default to returning the state

    return state;
}

export default rootReducer;