import React, { Component } from 'react';
import { grey800 } from 'material-ui/styles/colors';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    color: grey800,
    marginTop: '-5px'
  },
  avatar: {
    height: '50px',
    borderRadius: '30px',
    marginLeft: '10px'
  }
}

class UserProfile extends Component {
  render() {
    const { avatarURL, name } = this.props.user;

    return (
      <div style={styles.container}>
        <span>viewing as:&nbsp;&nbsp;</span>
        <h4>{name}</h4>
        <img src={avatarURL} style={styles.avatar}></img>
      </div>
    )
  }
}

export default UserProfile;
