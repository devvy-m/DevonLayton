import React, { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";

import { Button, Card, Form, Modal, Row, Col } from "react-bootstrap";
import { ConeStriped } from "react-bootstrap-icons";
import "./Contact.scss";
import { format } from "path";

export interface ContactProps {
  showModal: boolean;
  onHide: any;
}
const Contact: React.FC<ContactProps> = (props): ReactElement => {
  // console.log(props);
  const [phoneValue, setPhoneValue] = useState<Array<Number>>();
  const [numFormat, setPhoneNumFormat] = useState<number | string>();
  const phoneNumFormat = {
    "(": [123] + ")",
  };
  const handlePhoneChange = (e) => {
    setPhoneNumFormat(
      "(" +
        e.target.value.slice(0, 3).toString() +
        ")" +
        e.target.value.slice(3, 6).toString() +
        "-" +
        e.target.value.slice(6).toString()
    );
  };

  return (
    <Modal show={props.showModal} onHide={props.onHide} size="lg" centered>
      <div className="modalBody">
        {/* <Card className={"contactCard"}>
        <Card.Header >
          Contact
        </Card.Header>
        <Card.Body>
          "HELLO THERE"
        </Card.Body>

      </Card> */}

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            Contact Devon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Form.Group as={Col} controlId={"fullName"}>
                <Form.Control type="name" placeholder={"Full Name"} />
                <Form.Text id="nameHelpBlock">Enter Full Name</Form.Text>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId={"email"}>
                <Form.Control type="email" placeholder={"Email Address"} />
                <Form.Text id="emailHelpBlock">
                  Enter Valid Email Address
                </Form.Text>
              </Form.Group>
              <Form.Group as={Col} controlId={"phoneNumber"}>
                <Form.Control
                  type="number"
                  placeholder={"Phone Number " || numFormat}
                  onChange={(e) => handlePhoneChange(e)}
                />
                <Form.Text id="phoneNumberHelpBlock"> {numFormat}</Form.Text>
              </Form.Group>
            </Row>
            <Form.Group as={"text"} controlId={"leaveMessage"}>
              <Form.Control
                as="textarea"
                aria-label={"leaveMessage"}
                placeholder={"Enter Message"}
              ></Form.Control>{" "}
              <Form.Text id="messageHelpBlock">
                Leave a brief message and I will get back to you ASAP
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default Contact;
