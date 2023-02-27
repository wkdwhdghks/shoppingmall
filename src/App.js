import { Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./page/Home";
import Detail from "./page/Detail";
import data from "./data.js";
import "./App.css";

export default function App() {
  const [shoes] = useState(data);

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
        <Route path="/" element={<Home shoes={shoes} />}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}></Route>
      </Routes>
    </div>
  );
}
