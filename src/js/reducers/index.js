import {ADD_ARTICLE} from "../constants/action-types";

const initialState = {
    articles: []
};

// To determine how to calculate  the next state
function rootReducer(state = initialState, action) {

    // Changed to immutable object
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;