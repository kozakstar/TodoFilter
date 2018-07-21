import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './component/Header';
import NotePage from './page/NotePage';
import CreateNote from './component/CreateNote';
import EditeNote from './component/EditeNote';
import Error from './component/404';

import configureStore from './store/configureStore';

import './style.scss';

const store = configureStore();

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={NotePage} />
          <Route path="/create" component={CreateNote} />
          <Route path="/edit/:id" component={EditeNote} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
);
