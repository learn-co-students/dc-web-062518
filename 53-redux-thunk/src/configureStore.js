import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () => {
  // right now there's not too much additional set up we are doing
  // but there could be in the future
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};
export default configureStore;
