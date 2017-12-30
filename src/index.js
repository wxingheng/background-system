import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './routes/app';
import reducer from './examples/sync_react_redux/reducers'
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
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
