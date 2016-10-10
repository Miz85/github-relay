import React, { Component } from 'react';
import Relay, { createContainer } from 'react-relay';
import { Card, CardHeader, CardText } from 'material-ui/Card';

class Repository extends Component {
  render() {
    const { repository } = this.props;

    // If the repository does not have a description we show a generic message
    const description = repository.description ?
      repository.description :
      'No description available for this repository';

    const privacy = repository.isPrivate ?
      'Private repository' :
      'Public repository';

    return (
      <Card>
         <CardHeader
          title={<a href={repository.url}>{repository.name}</a>}
          subtitle={privacy}
          titleStyle={{margin: '0px', fontSize: '18px'}}
          />
        <CardText>{description}</CardText>
       </Card>
    );
  }
}

export default createContainer(Repository, {
  fragments: {
    repository: () => Relay.QL`
      fragment on Repository {
        id,
        name,
        description,
        isPrivate,
        url
      }
    `
  }
});
