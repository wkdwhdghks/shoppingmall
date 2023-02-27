import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import "./App.css";

export default function App() {
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
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="Shoes"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="shoes"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="Shoes"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
