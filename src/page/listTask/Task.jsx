import React, { useState, useEffect } from "react";
import { ListGroup, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Menu from '../../Components/Menu';
import WentWell from "./components/WentWell";
import ToImprove from "./components/ToImprove";
import ActionItems from "./components/ActionItems";
import "./Task.css";

function Task({ match }) {
  const [edittitle, setEdittitle] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = () => {
    setEdittitle(!edittitle);
  }
  useEffect(() => {
    const fetchMyData = async () => {
      const result = await axios.get(
        `https://dagk-back-end.herokuapp.com/tag/${localStorage.getItem('username')}/${match.params.board}`
      );
      setData(result.data.data);
    };
    fetchMyData();
  }, []);
  return (
    <div>
      <Menu />
      <div>
        {(() => {
          const elements = [];
          if (!edittitle)
            elements.push(
              <div className="header">
                <div className="header-text">{match.params.board}</div>
                <div className="header-icon" onClick={handleClick}>
                  <i class="fas fa-pen" ></i>
                </div>
              </div>
            )
          else elements.push(
            <div className="header">
              <div className="header-text">Job 1</div>
              <div className="header-icon" onClick={handleClick}>
                <i class="fas fa-check"></i>
              </div>
            </div>
          )
          return elements;
        })()}
      </div>
      <br />
      <div className="ml-5 mr-5 ">
        <Row>
          <Col xs={4}>
            <WentWell value={data} board={match.params.board}></WentWell>
          </Col>
          <Col xs={4}>
            <ToImprove value={data} board={match.params.board}></ToImprove>
          </Col>
          <Col xs={4}>
            <ActionItems value={data} board={match.params.board}></ActionItems>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default Task;