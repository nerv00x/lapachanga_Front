import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import '../index.css'
import { LinkContainer } from 'react-router-bootstrap';



function MiNavbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
      <div>
        <LinkContainer to="/directo">
          <img src="/profile.png" alt="Logo" className="logo" height={'50px'}/>
        </LinkContainer>
      </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Navbar
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/directo">
              <Nav.Link className="p-2">Directo</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/salas">
              <Nav.Link className="p-2">Salas</Nav.Link>
            </LinkContainer>
          
            <LinkContainer to="/apuestas">
              <Nav.Link className="p-2">Apuestas</Nav.Link>
            </LinkContainer>
          
            

          </Navbar>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className="search">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
        <LinkContainer to="/login">
              <Nav.Link className="p-2">Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/perfil">
              <Nav.Link className="p-2"><img src="/profile.png" alt="" height={'50px'}/></Nav.Link>
            </LinkContainer>

      </Container>
    </Navbar>
  );
}

export default MiNavbar;
