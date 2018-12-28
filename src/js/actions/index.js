// The only way to change state is by sending a signal to the store. This signal is an action.
// Dispatching an action - is the process of sending out a signal.
import {ADD_ARTICLE} from "../constants/action-types";

export function addArticle(payload) {
    return {type: ADD_ARTICLE, payload}
};