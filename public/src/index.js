import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/app';
import Artist from './components/artist/artist';
import Search from './components/search/search';
import Landing from './components/landing/landing';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

require('./index_css');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>

      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/artists/:id" component={Artist} />
        <Route path="/search" component={Search} />
      </Route>

    </Router>
  </Provider>
  , document.querySelector('.app'));
