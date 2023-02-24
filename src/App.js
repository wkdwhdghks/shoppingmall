import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [number, setNumber] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleNum, setTitleNum] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    let prev = [...title];
    prev[0] = "여자코트 추천";
    setTitle(prev);
  };

  return (
    <div>
      {title.map((el, index) => (
        <div key={index}>
          <p
            onClick={() => {
              setModal(!modal);
              setTitleNum(index);
            }}
          >
            {el}{" "}
            <span
              onClick={(e) => {
                e.stopPropagation();
                let arr = [...number];
                arr[index] += 1;
                setNumber(arr);
              }}
            >
              따봉
            </span>{" "}
            {number[index]}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setTitle(title.filter((el, i) => el[i] !== el[index]));
              }}
            >
              삭제
            </button>
          </p>
          <p>2월 17일 발행</p>
        </div>
      ))}
      <input onChange={(e) => setText(e.target.value)} value={text}></input>
      <button
        onClick={() => {
          setTitle([text, ...title]);
          setText("");
        }}
      >
        추가
      </button>
      {modal && (
        <Modal title={title} handleClick={handleClick} titleNum={titleNum} />
      )}
    </div>
  );
}

function Modal({ title, handleClick, titleNum }) {
  return (
    <div>
      <p>{title[titleNum]}</p>
      <button onClick={handleClick}>버튼</button>
    </div>
  );
}

export default App;
