import { createStore, combineReducers, applyMiddleware } from "redux";
import articleReducer from "./reducers/articleReducer";
import tagsReducer from "./reducers/tagsReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  articles: articleReducer,
  tags: tagsReducer,
});

export let store = createStore(rootReducer, applyMiddleware(logger, thunk));
