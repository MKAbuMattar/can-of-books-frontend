import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Jumbotron, Button } from 'react-bootstrap';

class BestBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.getloading();
  }

  getloading = async () => {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <>loading...</>
        ) : (
          <>
            {this.props.books.map((book, idx) =>
              <>
                <Jumbotron key={idx}>
                  <h2>Book title: {book.name}</h2>
                  <p>Book description: {book.description}</p>
                  <p>Book status: {book.status}</p>
                  <Button
                    variant="danger"
                    onClick={() => this.props.delBook(idx)} > Remove Book ({book.name})</Button>
                </Jumbotron>
              </>
            )}
          </>
        )}
      </>
    );
  }
}
export default withAuth0(BestBooks);
