import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail({ shoes }) {
  const [sale, setSale] = useState(true);
  const { id } = useParams();
  const findItme = shoes.find((item) => item.id === Number(id));

  useEffect(() => {
    setTimeout(() => {
      setSale(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {sale && <div className="sale">2초 이내 구매 시 할인</div>}
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
