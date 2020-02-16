import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form } from 'react-bootstrap';

class AddModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
          items:[],
          currentItem:{
                firstName: '',
                lastName: '',
                country: ''
          }
          
   }
   this.handleInput = this.handleInput.bind(this);
   this.addItem = this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      country: e.target.value
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
}
  
  render() {
    return (
      <Modal
      {...this.props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
        <Row>
          <Col sm={6}>
            <Form onSubmit={this.addItem}>
              
              <Form.Group controlld="FirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="FirstName"
                  required
                  placeholder="FirstName"
                  />
              </Form.Group>

              <Form.Group controlld="LastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="LastName"
                  required
                  placeholder="Last Name"
                  />
              </Form.Group>

              <div className="box">
                <select >
                  <option>Bangladesh</option>
                  <option>Australia</option>
                  <option>Japan</option>
                </select>
              </div>

              <Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button className="btn btn-primary" variant="danger" onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    
    );
  }
}

export default AddModal;
