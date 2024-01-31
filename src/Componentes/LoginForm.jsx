// LoginForm.js
import React from "react";
import { Form, Button } from "react-bootstrap";
import RegisterModal from "./registerModal";
import { useState } from "react";


const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
  };

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };
  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Button
        variant="success"
        className="ms-2"
        onClick={handleOpenRegisterModal}
      >
        Register
      </Button>

      <RegisterModal
        showModal={showRegisterModal}
        handleClose={handleCloseRegisterModal}
      />
    </Form>
  );
};

export default LoginForm;
