import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Board from "./Board";

function ListBoard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyData = async () => {
      const result = await axios(
        "https://dagk-back-end.herokuapp.com/board/boards/meo_lamphong"
      );
      setData(result.data.data);
    };
    fetchMyData();
  }, []);
  return (
    <div>
      <Container>
        <Row>
        {data.map((item) => (
          <Col>
            <Board data={item}></Board>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
}

export default ListBoard;