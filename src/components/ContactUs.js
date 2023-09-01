import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Alert from "@/cards/Alerts";

export const ContactUs = () => {
  const form = useRef({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    form.current[name] = value;
  };
  const [alert, setAlert] = useState({
    color: "",
    icon: "",
    message: "",
  });

  const successAlert = {
    color: "success",
    icon: "ni ni-like-2",
    message: " Your message has been sent successfully!",
  };

  const errorAlert = {
    color: "danger",
    icon: "ni ni-bell-55",
    message: " Oops! Something went wrong. Please try again later.",
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { user_name, user_email, user_message } = form.current;
    console.log("Name:", user_name);
    console.log("Email:", user_email);
    console.log("Message:", user_message);

    if (form.current) {
      emailjs
        .send(
          "service_1o2nwyj",
          "template_xo63pgn",
          {
            from_name: user_name,
            email_id: user_email,
            massage: user_message,
          },
          "-GLZTed02X0-6oPrc"
        )
        .then(
          (result) => {
            setAlert(successAlert);
            form.current.user_name = "";
            form.current.user_email = "";
            form.current.user_message = "";
          },
          (error) => {
            console.log(error.text);
            setAlert(errorAlert);
            form.current.user_name = "";
            form.current.user_email = "";
            form.current.user_message = "";
          }
        );
    }
  };
  return (
    <>
      <section className="section section-lg section-shaped">
        <form onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me?</h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-user-run" />
                        </InputGroupText>
                        <Input
                          onChange={handleInputChange}
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                        <Input
                          onChange={handleInputChange}
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        onChange={handleInputChange}
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                      >
                        Send Message
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
