// LoginForm.js
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterModal from "./registerModal";
import LoginModal from "./loginModal"; 

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();


  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST a /login
      const response = await axios.post(
        "http://lapachanga-back.test/api/login",
        {
          email: email,
          password: password,
        }
      );

      // Manejar la respuesta exitosa
      console.log("Inicio de sesión exitoso:", response.data);

      // Actualizar el estado para mostrar el mensaje de éxito
      setSuccessMessage("Inicio de sesión exitoso. ¡Bienvenido!");

      // Cerrar el modal de inicio de sesión después del inicio de sesión exitoso
      handleCloseLoginModal();

      // Redirigir a la página deseada después del inicio de sesión exitoso
      navigate("/directo");
    } catch (error) {
      // Manejar errores (puedes mostrar un mensaje de error al usuario, etc.)
      setErrorMessage("Error al iniciar sesión");
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      {successMessage && (
        <Alert
          variant="success"
          onClose={() => setSuccessMessage(null)}
          dismissible
        >
          {successMessage}
        </Alert>
      )}

      {errorMessage && (
        <Alert
          variant="danger"
          onClose={() => setErrorMessage(null)}
          dismissible
        >
          {errorMessage}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button
          variant="success"
          className="ms-2"
          onClick={() => setShowLoginModal(true)} // Abre el modal de inicio de sesión
        >
          Register
        </Button>

        <RegisterModal
          showModal={showRegisterModal}
          handleClose={handleCloseRegisterModal}
        />

        <LoginModal
          showModal={showLoginModal}
          handleClose={handleCloseLoginModal}
        />
      </Form>
    </div>
  );
};

export default LoginForm;
