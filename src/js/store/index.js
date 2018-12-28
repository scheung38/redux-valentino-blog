import {createStore} from "redux";
import rootReducer from "../reducers/index";

// Our central store to maintain external state of react components
const store = createStore(rootReducer);

export default store;
