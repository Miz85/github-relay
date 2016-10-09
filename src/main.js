import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HomeRoute from './routes/HomeRoute';

import App from './components/App';

injectTapEventPlugin();

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.github.com/graphql', {
    headers: {
      Authorization: 'Bearer <YOUR_ACCESS_TOKEN_HERE>'
    },
  })
);

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={new HomeRoute()}/>,
  document.getElementById('app-mount-point'));
