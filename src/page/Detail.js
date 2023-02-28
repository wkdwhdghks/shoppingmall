import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ shoes }) {
  const { id } = useParams();
  const findItme = shoes.find((item) => item.id === Number(id));

  const [alert, setAlert] = useState(true);
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setWarning(false);
    }, 1000);
  }, [warning]);

  const handleChange = (e) => {
    if (isNaN(e.target.value)) {
      setWarning(true);
    } else {
      setText(e.target.value);
    }
  };

  return (
    <div className="container">
      {warning && <div>경고: 숫자만 입력하세요</div>}
      <input type="text" value={text} onChange={handleChange}></input>
      {alert && <div>2초 이내 구매시 할인</div>}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findItme.id + 1
            }.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItme.title}</h4>
          <p>{findItme.content}</p>
          <p>{findItme.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
