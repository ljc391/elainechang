'use strict'
import React from 'react'
import { Router, Route, IndexRedirect, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import axios from 'axios'
import ReactDOM from 'react-dom'
import HomeContainer from './HomeContainer';
import { hashHistory, IndexRoute } from 'react-router';
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();


ReactDOM.render(
  <MuiThemeProvider >
  <Provider store={store}>
        <Router history={newHistory}>
          <Route path="/" component={ HomeContainer } >
          </Route>
        </Router>
  </Provider>
    </MuiThemeProvider >,
  document.getElementById('app')
);