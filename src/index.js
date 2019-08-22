import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { connectRouter, ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import reducer from './reducers'
import './css/styles.css'
import * as History from 'history'
import App from "./components/App"

export const history = History.createBrowserHistory()

const rootReducer = combineReducers({
  reducer,
  router: connectRouter(history),
});

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(thunk, logger)

)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
