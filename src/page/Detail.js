import { useParams } from "react-router-dom";

export default function Detail({ shoes }) {
  const { id } = useParams();
  const filterItme = shoes.find((item) => item.id === Number(id));

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                filterItme.id + 1
              }.jpg`}
              width="100%"
              alt="shoes"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{filterItme.title}</h4>
            <p>{filterItme.content}</p>
            <p>{filterItme.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
