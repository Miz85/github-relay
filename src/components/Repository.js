import React from 'react';
import Relay from 'react-relay';

class Repository extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { repository } = this.props;
    return (
      <div>
        {repository.name}
        {() => { if (repository.isPrivate) { return 'Private' } }}
      </div>
    );
  }
}

export default Relay.createContainer(Repository, {
  fragments: {
    repository: () => Relay.QL`
      fragment on Repository {
        id,
        name,
        isPrivate
      }
    `
  }
});
