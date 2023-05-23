import { createStore } from "redux"

import rootReducer from "../reducers"
import thunk from "redux-thunk"
import { applyMiddlewareFromEnv } from './utils'

const middleware = [thunk]
const INITIAL_STATE = {}

const store = createStore(rootReducer, INITIAL_STATE, applyMiddlewareFromEnv(middleware));

export default store;
