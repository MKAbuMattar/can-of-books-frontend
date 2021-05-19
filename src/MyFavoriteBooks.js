import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import BookFormModal from './BookFormModal';
import { Jumbotron, Button } from 'react-bootstrap';
import './myFavoriteBooks.css';
import UpdateBookForm from './UpdateBookForm';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false,
      bookName: '',
      bookDescription: '',
      bookStatus: '',
      books: [],
      email: '',
      index: 0,
      showUpdateForm: false
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { user } = this.props.auth0;
    try {
      const url = `${process.env.REACT_APP_API_URL}/books?email=${user.email}`;
      const bookRequest = await axios.get(url);
      this.setState({
        books: bookRequest.data[0].books,
        loading: false,
        error: '',
        email: user.email
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: err
      });
    }
  };

  handleShow = () => this.setState({ show: true, });

  handleClose = () => this.setState({ show: false, });

  updateBookName = (event) => this.setState({ bookName: event.target.value });
  updateBookDescription = (event) => this.setState({ bookDescription: event.target.value });
  updateBookStatus = (event) => this.setState({ bookStatus: event.target.value });

  addbook = async (event) => {
    event.preventDefault();

    const body = {
      name: this.state.bookName,
      description: this.state.bookDescription,
      status: this.state.bookStatus
    };

    const newBook = await axios.post(`${process.env.REACT_APP_API_URL}/books`, body);

    this.setState({
      books: newBook.data,
      show: false,
    });
  }

  delBook = async (index) => {
    const newBooks = this.state.books.filter((result, idx) => {
      return idx !== index;
    });

    this.setState({
      books: newBooks
    });

    const params = {
      email: this.state.email,
    };

    await axios.delete(`${process.env.REACT_APP_API_URL}/books/${index}`, { params: params });
  }
  showUpdateForm = (idx) => {


    const newBookArr = this.state.books.filter((value, index) => {
      return idx === index;
    });


    this.setState({
      index: idx,
      bookName: newBookArr[0].bookName,
      bookDescription: newBookArr[0].bookDescription,
      bookStatus: newBookArr[0].bookStatus,
      showUpdateForm: true,
    });
  }
  updateBook = async (e) => {
    e.preventDefault();
    const reqBody = {
      bookName: this.state.bookName,
      bookDescription: this.state.bookDescription,
      bookStatus: this.state.bookStatus
    };
    const book = await axios.put(`${this.state.server}/books/${this.state.index}`, reqBody);

    this.setState({
      books: book.data
    });

  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <>loading...</>
        ) : (
          <>
            <Jumbotron>
              <h1>My Favorite Books</h1>
              <p>This is a collection of my favorite books</p>
              <>
                <Button
                  variant="primary"
                  onClick={this.handleShow}
                >Add Book</Button>

                <BookFormModal
                  show={this.state.show}
                  handleClose={this.handleClose}
                  updateBookName={this.updateBookName}
                  updateBookDescription={this.updateBookDescription}
                  updateBookStatus={this.updateBookStatus}
                  addbook={this.addbook}
                />
              </>
            </Jumbotron>
            <BestBooks
              books={this.state.books}
              delBook={this.delBook}
            />
            <UpdateBookForm
              show={this.state.showUpdateForm}
              handleClose={this.handleClose}
              books={this.state.books}
              bookName={this.state.bookName}
              bookDescription={this.state.bookDescription}
              bookStatus={this.state.bookStatus}
              updatebookname={this.updateBookName}
              updateBookDescription={this.updateBookDescription}
              updateBookStatus={this.updateBookStatus}
              updateBook={this.updateBook}

            />
          </>
        )}
      </>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
