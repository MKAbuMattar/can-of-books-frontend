import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Page404 from './Page404';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
      <>
        {(user !== undefined) ?
          (
            <>
              <div>Hello {user.name}</div>
              <div>Your Email: {user.email}</div>
            </>
          ) : (
            <>
              <Page404 />
            </>
          )}

      </>);
  }
}

export default withAuth0(Profile);
