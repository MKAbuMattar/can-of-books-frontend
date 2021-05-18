import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Page404 from './Page404';
import { Card } from 'react-bootstrap';

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
                  <div className="grid">
                    <Card>
                      <Card.Img src={user.picture} alt={`your image ${user.name}`} title={user.name} />
                      <Card.Body>
                        <Card.Title>Hello {user.name}</Card.Title>
                        <Card.Text>Your Email: {user.email}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
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
