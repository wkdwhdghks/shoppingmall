import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [num, setNum] = useState(0);

  return (
    <div>
      {title.map((el, index) => (
        <div key={index}>
          <p>
            {el} <span onClick={() => setNum(num + 1)}>따봉</span> {num}
          </p>
          <p>2월 17일 발행</p>
        </div>
      ))}
      <button onClick={() => setTitle([...title].sort())}>버튼</button>
    </div>
  );
}

export default App;
