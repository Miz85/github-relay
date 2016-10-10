import React, { Component } from 'react';
import Relay, { createContainer } from 'react-relay';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { grey200, grey800 } from 'material-ui/styles/colors';
import Repository from './Repository';
import UserProfile from './UserProfile';

const styles = {
  appBar: {
    position:'fixed',
    top: 0,
    right: 0,
    left:0,
    backgroundColor: grey200,
    title: {
     color: grey800
   }
  },
  container: {
    width: '90%',
    margin: '0 auto',
    marginTop: '120px'
  },
  repositoryList: {
    listStyle: 'none',
    margin: '0px',
    padding: '0px'
  }
};

class App extends Component {
  render() {
    const { viewer } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Relay Github Explorer"
            style={styles.appBar}
            titleStyle={styles.appBar.title}
            iconElementLeft={<div></div>}
            iconElementRight={<UserProfile user={viewer}/>}/>
          <div style={styles.container}>
            <h1>Your repositories</h1>
            <ul style={styles.repositoryList}>
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

export default createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        name,
        avatarURL,
        repositories(first: 5, orderBy: {field: NAME, direction: ASC}) {
          edges {
            node {
              id
              ${Repository.getFragment('repository')}
            }
          }
        }
      }
    `
  }
});
