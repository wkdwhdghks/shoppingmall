import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store";
import TabContent from "../Components/TabContent";
import styles from "./Detail.module.css";
import Tab from "../Components/Tab";

export default function Detail({ shoes }) {
  const [sale, setSale] = useState(true);
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  const { id } = useParams();
  const findItme = shoes.find((item) => item.id === Number(id));
  const dispatch = useDispatch();

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

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem("watched"));
    watched.push(findItme.id);
    let ddplc = [...new Set(watched)];
    localStorage.setItem("watched", JSON.stringify(ddplc));
  }, [findItme]);

  return (
    <div className="container">
      {sale && <div className={styles.sale}>2초 이내 구매 시 할인</div>}
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
        <div className={styles.infoBox}>
          <h4 className="pt-5">{findItme.title}</h4>
          <p>{findItme.content}</p>
          <p>{findItme.price.toLocaleString()}원</p>
          <button
            className={styles.button}
            onClick={() => {
              dispatch(addItem(findItme));
            }}
          >
            주문하기
          </button>
          <Link to={"/"}>
            <button className={styles.button}>뒤로가기</button>
          </Link>
        </div>
      </div>

      <Tab setTab={setTab} />
      <TabContent tab={tab} />
    </div>
  );
}
