import { Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import Detail from "./page/Detail";
import data from "./data.js";
import axios from "axios";
import "./App.css";

export default function App() {
  const [shoes] = useState(data);
  const [axiosData, setAxiosData] = useState([]);

  const handleClick = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        setAxiosData(result.data);
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
              <Link to="/detail">Detail</Link>
            </ul>
          </li>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              shoes={shoes}
              axiosData={axiosData}
              handleClick={handleClick}
            />
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
      </Routes>
    </div>
  );
}
