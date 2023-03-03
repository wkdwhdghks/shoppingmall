import { Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Cart from "./page/Cart";
import data from "./data.js";
import axios from "axios";
import "./App.css";

export default function App() {
  const [shoes, setShoes] = useState(data);
  const [dataNum, setDataNum] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    axios
      .get(`https://codingapple1.github.io/shop/data${dataNum}.json`)
      .then((result) => {
        setShoes([...shoes, ...result.data]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container className="nav-container">
          <li>
            <ul>
              <Link to="/">ShoesShop</Link>
            </ul>
            <ul>
              <Link to="/">Home</Link>
            </ul>
            <ul>
              <Link to="/cart">Cart</Link>
            </ul>
          </li>
        </Container>
      </Navbar>

      {loading && <div>로딩중 입니다.</div>}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              shoes={shoes}
              dataNum={dataNum}
              setDataNum={setDataNum}
              handleClick={handleClick}
            />
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
