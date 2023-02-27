import { Navbar, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
import "./App.css";

export default function App() {
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
              <Link to="/detail">메인페이지</Link>
            </ul>
          </li>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}
