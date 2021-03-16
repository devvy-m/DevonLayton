import React, { ReactElement } from "react";
import {Card,Form, Modal} from "react-bootstrap";
import { ConeStriped } from "react-bootstrap-icons";
import "./Contact.scss";
const Contact: React.FC = (): ReactElement => {
  return (
    <div className="contactBody">
      <h4 id="/contact">Contact</h4>
      <Card className={"contactCard"}>
        <Card.Header >
          Contact
        </Card.Header>
        <Card.Body>
          "HELLO THERE"
        </Card.Body>

      </Card>
    </div>
  );
};

export default Contact;
