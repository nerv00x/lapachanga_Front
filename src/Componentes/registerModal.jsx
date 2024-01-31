// RegisterModal.js
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RegisterModal({ showModal, handleClose }) {
  const handleRegister = () => {
    // Lógica de registro, puedes implementarla según tus necesidades
    // Por ahora, simplemente cerramos el modal
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Registro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Formulario de Registro */}
        <Form>
          {/* Agrega campos de registro según tus necesidades */}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* Agrega más campos según sea necesario */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleRegister}>
          Registrar
        </Button>
      </Modal.Footer>
    </Modal>
    
  );
}

export default RegisterModal;
