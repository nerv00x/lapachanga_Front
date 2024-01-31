// LoginPage.js
import React, { useState } from 'react';
import LoginModal from '../Componentes/loginModal';

const LoginPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    // Puedes redirigir a otra página aquí si es necesario
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default LoginPage;
