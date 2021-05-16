import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">My Favorite Books</Link>
        </Navbar.Brand>
        <Link to="/">Home</Link>
        {isAuthenticated &&
          <>
            <Link to="/profile">Profile</Link>
          </>
        }
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        {isAuthenticated &&
          <>
            <LogoutButton />
          </>
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);
