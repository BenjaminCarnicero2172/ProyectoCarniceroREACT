import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand='lg' bg="primary" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Container>
          <Navbar.Collapse>
                <Navbar.Brand as={Link} to='/'>
                  Tienda Celulares
                </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>
                    Inicio
                  </Nav.Link>
                  <Nav.Link as={Link} to='/category/productos'>Productos</Nav.Link>
                  <Nav.Link as={Link} to='/category/accesorios'>Accesorios</Nav.Link>
                </Nav>
                <CartWidget />
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default  NavBar;


