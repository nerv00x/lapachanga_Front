// RegisterModal.js
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function RegisterModal({ showModal, handleClose }) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleRegister = async () => {
    try {
      // Realizar la solicitud POST para el registro
      const response = await axios.post(
        "http://lapachanga-back.test/api/register",
        {
          nombre: nombre,
          email: email,
          password: password,
          password_confirmation: password,
        }
      );

      // Manejar la respuesta exitosa (puedes realizar acciones adicionales, como redireccionar)
      console.log("Registro exitoso:", response.data);

      // Cerrar el modal después de un registro exitoso
      handleClose();
    } catch (error) {
      // Manejar errores (puedes mostrar un mensaje de error al usuario, etc.)
      console.error("Error al registrar:", error);
    }
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
            <Form.Control
              type="nombre"
              placeholder="Enter Name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
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
