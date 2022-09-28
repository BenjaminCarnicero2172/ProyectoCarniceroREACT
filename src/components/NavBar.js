import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css'
const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Tienda Celulares
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
}

export default  NavBar;


