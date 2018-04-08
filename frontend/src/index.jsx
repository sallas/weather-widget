/* eslint-disable import/no-extraneous-dependencies */
/*
  issue with react-hot-loader
  even tho those 2 deps are only used in development
  eslint has no way to tell that and outputs an error
*/

// react deps
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";

// hot reload for development
import { AppContainer } from 'react-hot-loader';

import App from './App';
import api from '../util/api';
import './style.scss';
import configureStore from '../redux/configureStore';

const store = configureStore();

import createHistory from 'history/createBrowserHistory'
const history = createHistory();

const params = new URLSearchParams(history.location.search.slice(1));
const city = params.get('city')

api.getWeather(city)
  .then(response => {
    store.dispatch({ type: "FETCHING_SUCCESS", payload: { data: response.body } })
  });

const root = document.getElementById('root');

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <React.Fragment>
        <AppContainer>
          <Component />
        </AppContainer>
      </React.Fragment>
    </Provider>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
