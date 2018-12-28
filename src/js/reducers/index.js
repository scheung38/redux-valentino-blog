import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};

// To determine how to calculate  the next state
function rootReducer(state = initialState, action) {

    // Mutates object
    if (action.type === ADD_ARTICLE) {
        state.articles.push(action.payload);
    }
    return state;
}

export default rootReducer;