import { applyMiddleware } from "redux"

export function createReduxLogger(middleware){
    
  const { createLogger } = require(`redux-logger`)
    const logger = createLogger({ /**options */ })
    middleware.push(logger);
}

export function _useDevTools(middleware, _fn){
  const { composeWithDevTools } = require("redux-devtools-extension")
  return composeWithDevTools(_fn(...middleware))
}

export function applyMiddlewareFromEnv(middleware){
if (process.env.NODE_ENV !== `development`) {
    return applyMiddleware(...middleware);
} 
// dev mode: enable logs & dev tools: ofcourse!
createReduxLogger(middleware)
return _useDevTools(middleware, applyMiddleware)

}