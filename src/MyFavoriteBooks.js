import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './myFavoriteBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
