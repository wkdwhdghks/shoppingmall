import { Container, Row, Col } from "react-bootstrap";
import Card from "../Components/Card.js";

export default function Home({ shoes }) {
  return (
    <div>
      <div className="main-bg"></div>
      <Container className="goods-container">
        <Row>
          {shoes.map((item, index) => (
            <Col key={index}>
              <Card item={item} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
