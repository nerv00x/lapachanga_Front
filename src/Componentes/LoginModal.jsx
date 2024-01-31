// LoginModal.js
import React from 'react';
import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';

const LoginModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
