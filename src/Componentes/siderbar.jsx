// StackedExample.js
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import "../index.css"; // Importa tu archivo CSS

function StackedExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      expand="lg"
      className="fixed-left"
      
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        
        <Stack gap={3}>
          <Nav
            defaultActiveKey="/home"
            className="flex-column reduced-height"
            id="sidebar"
          >
            <Nav.Link href="/home" className="mb-5">
              Competiciones
            </Nav.Link>
            <Nav.Link href="/link-1" className="mb-5">
              LEC
              <img src="/lec.png" alt="lec" className="lec-logo" />
            </Nav.Link>
            <Nav.Link href="link-2" className="mb-5">
              SUPERLIGA
            </Nav.Link>
            <Nav.Link href="disabled" className="mb-5" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Stack>
        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default StackedExample;
