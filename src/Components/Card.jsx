import styles from "./Card.module.css";

export default function Card({ item, index }) {
  return (
    <div className={styles.box}>
      <img
        src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`}
        alt="Shoes"
        width="400px"
      ></img>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <p>{item.price.toLocaleString()}원</p>
    </div>
  );
}
