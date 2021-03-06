import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// let middleware = [thunk];
import rootSaga from "./sagas/asyncCounter";

const sagaMiddleware = createSagaMiddleware();

// const logger = store => next => action => {
//   console.log("Logger: ", action);
//   next(action);
// };
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);
export default store;

// actions >>> sync ---> after dispatching change state immediately  #### async  ---> after action dispatched before state change async function should be resolved

// action => middleware => reducer
