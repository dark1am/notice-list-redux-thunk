import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const store = createStore(
    counterReducer,
    applyMiddleware(thunk)
)

export default store