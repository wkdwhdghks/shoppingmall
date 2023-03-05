import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import RecentlyProduct from "../Components/RecentlyProduct";
import { addCount, minusCount, deleteItem } from "../store";
import styles from "./Cart.module.css";

export default function Cart() {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <div className={styles.tableBox}>
        <Table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            {state.map((item, i) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => {
                      dispatch(minusCount(state[i].id));
                    }}
                  >
                    -
                  </button>
                  <div className={styles.count}>{item.count}</div>
                  <button
                    className={styles.button}
                    onClick={() => {
                      dispatch(addCount(state[i].id));
                    }}
                  >
                    +
                  </button>
                  <button
                    className={styles.delButton}
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
      <RecentlyProduct />
    </div>
  );
}
