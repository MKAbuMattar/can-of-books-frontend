import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Page404 from './Page404';
import BestBooks from './BestBooks';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      loading: true,
    };
  }

  componentDidMount() {
    this.setState({

      loading: false,
    });
  }



  render() {

    const { user } = this.props.auth0;
    return (
      <>
        {this.state.loading ? (
          <>
            loading...
          </>
        ) : (
          <>
            {(user !== undefined) ?
              (
                <>

                  <div>Hello {user.name}</div>
                  <div>Your Email: {user.email}</div>
                  <BestBooks />

                </>
              ) : (
                <>
                  <Page404 />
                </>
              )}
          </>)}


      </>);
  }
}

export default withAuth0(Profile);
