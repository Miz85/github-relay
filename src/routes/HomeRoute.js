import Relay from 'react-relay';

class HomeRoute extends Relay.Route {
  static queries = {
    viewer: () => Relay.QL`query { viewer }`
  };
  static routeName = 'HomeRoute';
}

export default HomeRoute;
