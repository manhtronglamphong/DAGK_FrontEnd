import React, { useState,useEffect } from "react";
import { ListGroup,Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Board from "./Board";

function BoardDetails(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyData = async () => {
      // var str = window.location.pathname;
      // var res = str.split("/boarddetail/");
      // var temp="https://dagk-back-end.herokuapp.com/tag/board/"+res[1];
      const result = await axios(
        "https://dagk-back-end.herokuapp.com/tag/board/56fbe5cb-f89d-41ab-b587-1ab38eeeb68f"
      );
      setData(result.data.data);
    };
    fetchMyData();
  }, []);
  return (
    <div>
        <ListGroup>
        {data.map((item) => (
          <ListGroup.Item>
            {item.name}
          </ListGroup.Item>
        ))}
        </ListGroup>
    </div>
  );
}

export default BoardDetails;