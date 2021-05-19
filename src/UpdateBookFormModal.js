import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookFormModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
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
            <Modal
              show={this.props.showUpdae}
              onHide={this.props.handleCloseUpdae}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
              <Modal.Header closeButton>
                <Modal.Title>Edit Book ({this.props.bookName})</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Book title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter book title"
                      value={this.props.bookName}
                      onChange={(event) => this.props.updateBookName(event)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter book description"
                      value={this.props.bookDescription}
                      onChange={(event) => this.props.updateBookDescription(event)} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book status</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter book status"
                      value={this.props.bookStatus}
                      onChange={(event) => this.props.updateBookStatus(event)} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleCloseUpdae}>Close</Button>
                <Button variant="primary" onClick={this.props.updateBook} >Edit Book</Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(UpdateBookFormModal);
