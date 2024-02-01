import Nav from 'react-bootstrap/Nav';
import '../index.css'; // Importa tu archivo CSS

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column reduced-height" id="sidebar">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;
