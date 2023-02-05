import React, { useState } from "react";
import "../styles/login.css";
import logo from "../images/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Login() {
  //VALIDATIONS
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="login-main">
      <div className="login-container container">
        <a href="/" className="logo-div">
          <img
            src={logo}
            className="img-fluid footer-logo logo-login"
            alt="Logo"
          />
        </a>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="login-form"
        >
          <div className="login-lead">Sign In to Workspace</div>
          <Form.Group
            className="form-group"
            controlId="validationCustomUsername"
          >
            <Form.Label>Email</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="mail@example.com"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter the email!
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="form-group" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Enter password here"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter the password!
              </Form.Control.Feedback>
            </InputGroup>
            <div className="forgot-pwd-div">
              <a href="/forgotpwd" className="form-label">
                Forgot password?
              </a>
            </div>
          </Form.Group>

          <Button
            variant="bg-danger"
            type="submit"
            className="header-btn register browse-btn signin-btn"
          >
            Sign in
          </Button>

          <div className="signup-div form-label">
            Don't have an account? <a href="/register">Sign up </a>
          </div>
        </Form>
      </div>
    </div>
  );
}
