import React, { ReactElement, useState } from "react";
import { Form, Modal, Row, Col, Button } from "react-bootstrap";
import "./Contact.scss";

export interface ContactProps {
  showModal: boolean;
  onHide: any;
}
const Contact: React.FC<ContactProps> = (props): ReactElement => {
  //contact form schema
  const formFields = {
    date: new Date(),
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "(XXX)XXX-XXXX",
    message: "",
  };

  const [formData, setFormData] = useState(formFields); //store form Data

  const handleFormChanges = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    switch (e.target.id) {
      case "firstName":
        setFormData({ ...formData, firstName: e.target.value });
        break;
      case "lastName":
        setFormData({ ...formData, lastName: e.target.value });
        break;
      case "emailAddress":
        setFormData({ ...formData, email: e.target.value });
        break;
      case "phoneNumber":
        setFormData({
          ...formData,
          phoneNumber:
            "(" +
            e.target.value.slice(0, 3).toString() +
            ")" +
            e.target.value.slice(3, 6).toString() +
            "-" +
            e.target.value.slice(6).toString(),
        });
        break;
      case "message":
        setFormData({ ...formData, message: e.target.value });
        break;

      default:
        break;
    }
  };
  console.log(formData);

  return (
    <div className={"contactModal"} >

    <Modal show={props.showModal} onHide={props.onHide} size="lg" centered >
      <div className="modalBody">
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group as={Form.Row}>
              <Col>
                <Form.Control
                  type="name"
                  placeholder={"First"}
                  id={"firstName"}
                  onChange={(e) => handleFormChanges(e)}
                />
                <Form.Text
                  id="firstNameHelpBlock"
                  placeholder={"Enter First Name"}
                >
                  {"First name: " + formData.firstName}
                </Form.Text>
              </Col>
              <Col>
                <Form.Control
                  type="name"
                  placeholder={"Last"}
                  id={"lastName"}
                  onChange={(e) => handleFormChanges(e)}
                />
                <Form.Text id="lastNameHelpBlock">
                  {"Last name: " + formData.lastName}
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row}>
              <Col>
                <Form.Control
                  type="email"
                  placeholder={"Email Address"}
                  id={"emailAddress"}
                  onChange={(e) => handleFormChanges(e)}
                />
                <Form.Text id="emailHelpBlock">
                  {"Email: " + formData.email}{" "}
                </Form.Text>
              </Col>
              <Col>
                <Form.Control
                  type="number input"
                  placeholder={"Phone Number "}
                  id={"phoneNumber"}
                  onChange={(e) => handleFormChanges(e)}
                />
                <Form.Text id="phoneNumberHelpBlock">
                  {" "}
                  {formData.phoneNumber}
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Form.Row}>
              <Col>
                <Form.Control
                  as="textarea"
                  aria-label={"leaveMessage"}
                  placeholder={"Enter Message"}
                  id={"message"}
                  onChange={(e) => handleFormChanges(e)}
                ></Form.Control>

                <Form.Text id="messageHelpBlock">
                  Leave a brief message and I will get back to you ASAP
                  {formData.message}
                </Form.Text>
              </Col>
            </Form.Group>
          </Modal.Body>
        </Form>
        <Modal.Footer>
          <Form.Text id="dateBlock">
            {formData.date.toLocaleDateString()}
          </Form.Text>

          <Button onClick={props.onHide} variant="secondary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
    </div>

  );
};

export default Contact;
