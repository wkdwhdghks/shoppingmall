import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Components/Card.js";

export default function Home({ shoes, dataNum, setDataNum, handleClick }) {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div className="main-bg"></div>
      <Container className="goods-container">
        <Row>
          {shoes.map((item, index) => (
            <Col key={index}>
              <Link to={`/detail/${index}`}>
                <Card item={item} index={index} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>

      {hide && (
        <button
          onClick={() => {
            handleClick();
            setDataNum(dataNum + 1);
            if (dataNum === 3) {
              setHide(false);
            }
          }}
        >
          더보기
        </button>
      )}
    </div>
  );
}
