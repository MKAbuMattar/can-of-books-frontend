import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="text-center">&copy; Best Books</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
