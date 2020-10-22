import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import auth from "../auth/state/index";
import account from "../account/state/index";
import main from "./state/index";
import write from "../write/state/index";
import search from "../search/state/index";
import posts from "../posts/state/index";

const rootReducer = combineReducers({
  auth,
  account,
  main,
  write,
  search,
  posts,
});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer);

function* rootSaga() {
  yield all([]);
}

export default store;
