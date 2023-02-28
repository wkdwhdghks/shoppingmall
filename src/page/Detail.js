import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export default function Detail({ shoes }) {
  const [sale, setSale] = useState(true);
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  const { id } = useParams();
  const findItme = shoes.find((item) => item.id === Number(id));

  useEffect(() => {
    setTimeout(() => {
      setSale(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return setFade("");
  }, []);

  return (
    <div className="container">
      {sale && <div className="sale">2초 이내 구매 시 할인</div>}
      <div className={`tab-container start ${fade}`}>
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findItme.id + 1
            }.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6 detail-info">
          <h4 className="pt-5">{findItme.title}</h4>
          <p>{findItme.content}</p>
          <p>{findItme.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 100);

    return setFade("");
  }, [tab]);

  return (
    <div className={`"tab-container start ${fade}`}>
      {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>
  );
}
