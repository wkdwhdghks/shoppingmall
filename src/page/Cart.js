import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, minusCount, deleteItem } from "../store";

export default function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, i) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(state[i].id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(minusCount(state[i].id));
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteItem(state[i].id));
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
