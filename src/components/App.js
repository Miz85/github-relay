import React from 'react';
import Relay from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Repository from './Repository';

const styles = {
  appBar: {
    position:'fixed',
    top: 0,
    right: 0,
    left:0
  },
  container: {
    marginTop: '100px'
  }
};

class App extends React.Component {
  render() {
    const { viewer } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Relay Github Explorer"
            style={styles.appBar} />
          <div style={styles.container}>
            <div>
              <p>
                Connected as:
                <span>{viewer.name}</span>
              </p>
              <img src={viewer.avatarURL} alt="avatar" width="50"/>
            </div>

            <ul>
              {viewer.repositories.edges.map(({node}) =>
                <li key={node.id}>
                  <Repository repository={node} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name,
        avatarURL,
        repositories(first: 5, orderBy: {field: NAME, direction: ASC}) {
          edges {
            node {
              ${Repository.getFragment('repository')}
            }
          }
        }
      }
    `
  }
});
