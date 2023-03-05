import Nav from "react-bootstrap/Nav";

export default function Tab({ setTab }) {
  return (
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setTab(0);
          }}
          eventKey="link0"
        >
          상세정보
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setTab(1);
          }}
          eventKey="link1"
        >
          리뷰
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          onClick={() => {
            setTab(2);
          }}
          eventKey="link2"
        >
          Q&A
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
