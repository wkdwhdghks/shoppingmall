import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../Components/Card.jsx";
import styles from "./Home.module.css";

export default function Home({ shoes, dataNum, setDataNum, handleClick }) {
  const [hide, setHide] = useState(true);

  return (
    <div>
      <div className={styles.img}></div>

      <Container className={styles.box}>
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
          className={styles.button}
          onClick={() => {
            handleClick();
            setDataNum(dataNum + 1);
            if (dataNum === 3) {
              setHide(false);
            }
          }}
        >
          상품 더보기
        </button>
      )}
    </div>
  );
}
