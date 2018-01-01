import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './routes/app';
import reducer from './examples/async_react_redux/reducers'
import registerServiceWorker from './registerServiceWorker';

import './styles/app.css';
import './styles/router.css';
import './styles/css/font-awesome.min.css';
import './styles/css/bootstrap.4.0.min.css';

// const logger = store => next => action => {
//   console.log('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   return result
// };
//
// let todoApp = combineReducers(reducer);
// const store = createStore(todoApp, applyMiddleware(logger));
const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
