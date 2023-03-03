import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {
  const state = useSelector((state) => state.cartData);
  console.log(state);
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
          {state.map((item) => (
            <tr>
              <td>1</td>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>1</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
