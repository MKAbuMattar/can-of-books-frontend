import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class BestBooks extends Component {

  constructor(props) {
    super(props);
    this.state = {

      loading: false,
      error: '',
      bookData: [],
    };
  }

  componentDidMount() {
    // const { user } = this.props.auth0;
    this.setState({
      loading: true,

    });
    this.getData();
  }
  getData = async () => {
    const { user } = this.props.auth0;
    try {
      // const paramsObj = {
      //   email: this.state.email,
      // };
      const url = `${process.env.REACT_APP_API_URL}/books?email=${user.email}`;
      // console.log(url);
      const bookRequest = await axios.get(url);
      this.setState({
        bookData: bookRequest.data[0].books,
        loading: false,
        error: '',
      });

    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });
    }
    // console.log('appURL', process.env.REACT_APP_API_URL);
    // console.log('params:', this.paramsObj);
    // console.log('from state', this.state.email);
    // console.log('reqData', this.bookRequest);
    // console.log('getData', this.state.bookData);
  }


  render() {
    // const { user } = this.props.auth0;
    // console.log(user);
    return (
      <>
        {this.state.loading ? (
          <>
            loading...
          </>
        ) : (
          <>
            <h2>My Favourite book</h2>
            {/* {console.log('bestbook', user.email)} */}
            {this.state.bookData.map((book, idx) =>

              <>
                <Card.Body key={idx}>
                  <Card.Title>book title: {book.name}</Card.Title>
                  <Card.Text>book description: {book.description}</Card.Text>
                  <Card.Text>book status: {book.status}</Card.Text>
                </Card.Body>
              </>


            )}
          </>
        )

        }


      </>
    );
  }
}
export default withAuth0(BestBooks);
