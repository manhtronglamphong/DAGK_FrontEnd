import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function BoardDetails({ match }) {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchMyData = async () => {
      await axios.get(
        `https://dagk-back-end.herokuapp.com/tag/board/${match.params.id}`
      ).then(result => {
        setData(result.data.data);
      })
    };
    fetchMyData();
  }, []);

  return (
    <div>
      <ListGroup>
        {data?.map((item) => (
          <ListGroup.Item>
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default BoardDetails;