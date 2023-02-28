export default function Card({ item, index }) {
  return (
    <div className="product-information">
      <img
        src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`}
        alt="Shoes"
        width="80%"
      ></img>
      <h4>{item.title}</h4>
      <p>{item.content}</p>
      <p>{item.price}</p>
    </div>
  );
}
