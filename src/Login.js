import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="grid">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Log In</Card.Title>
              <Card.Text>
                Click Below to Log In
              </Card.Text>
              {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
              <LoginButton />
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Login;
