import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="nav">
      <Container>
        <Navbar.Brand href="#home" id="it">IT Time</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Xizmatlar</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <NavDropdown title="Til" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">O'zbek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rus</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ingliz</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Biz haqimizda</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
