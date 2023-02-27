import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import data from "./data.js";
import Card from "./Card.js";
import "./App.css";

export default function App() {
  const [shoes, setShoes] = useState(data);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-container">
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container className="goods-container">
        <Row>
          {shoes.map((item, index) => (
            <Col>
              <Card item={item} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
