import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Components/Card.js";

export default function Home({ shoes }) {
  return (
    <div>
      <div className="main-bg"></div>
      <Container className="goods-container">
        <Row>
          {shoes.map((item, index) => (
            <Col key={index} className="text">
              <Link to={`/detail/${index}`}>
                <Card item={item} index={index} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
