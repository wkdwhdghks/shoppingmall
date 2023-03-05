import styles from "./RecentlyProduct.module.css";

export default function RecentlyProduct() {
  return (
    <div className={styles.box}>
      <p className={styles.title}>최근 본 상품</p>
      {JSON.parse(localStorage.getItem("watched")).map((itme) => (
        <div className={styles.subBox}>
          <img className={styles.img} src={itme.img} alt="Shoes"></img>
          <p className={styles.name}>{itme.title}</p>
        </div>
      ))}
    </div>
  );
}
