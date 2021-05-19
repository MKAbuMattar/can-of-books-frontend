import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends Component {

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
              show={this.props.show}
              onHide={this.props.handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered>
              <Modal.Header closeButton>
                <Modal.Title>Update Book</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Book title</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => this.props.updateBookName(e)}
                      placeholder="Enter book title" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book description</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => this.props.updateBookDescription(e)}
                      placeholder="Enter book description" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Book status</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => this.props.updateBookStatus(e)}
                      placeholder="Enter book status" />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                <Button variant="primary" onClick={this.props.updateBook}>Update Book</Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </>
    );
  }
}

export default withAuth0(UpdateBookForm);
