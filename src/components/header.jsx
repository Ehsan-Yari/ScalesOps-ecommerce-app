import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100 mb-2">
      <Container>
        <Navbar.Brand href="#">Ecommerce App</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
