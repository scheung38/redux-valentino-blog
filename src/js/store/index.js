import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import {forbiddenWordsMiddleware} from "../middleware";

const storeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Our central store to maintain external state of react components
const store = createStore(
    rootReducer,
    storeEnchancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;
