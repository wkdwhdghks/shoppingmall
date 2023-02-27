import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data.js";
import Card from "../Components/Card.js";

export default function Home() {
  const [shoes] = useState(data);

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
