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
  const [title, setTitle] = useState('');
  const [newtitle, setNewTitle] = useState('');
  const [data, setData] = useState([]);
  const handleClick = () => {
    setEdittitle(!edittitle);
  }
  const rename = (id, newname) => {
    const data = { id: id, newName: newname }
    const renameboard = async () => {
      console.log(data);
      await axios.post('https://dagk-back-end.herokuapp.com/board/renameBoard', data)
        .then(function (response) {
        })
        .catch(function (error) {
          console.log(error);
          alert(error);
        });
      window.location.reload(true);
    }
    renameboard();
  }
  useEffect(() => {
    const fetchTitle = async () => {
      const result = await axios.get(
        `https://dagk-back-end.herokuapp.com/board/${match.params.board}`
      );
      setTitle(result.data.data.name);
      setNewTitle(result.data.data.name);
    };
    fetchTitle();
    const fetchMyData = async () => {
      const result = await axios.get(
        `https://dagk-back-end.herokuapp.com/tag/board/${match.params.board}`
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
                <div className="header-text">{title}</div>
                <div className="header-icon" onClick={handleClick}>
                  <i class="fas fa-pen" ></i>
                </div>
              </div>
            )
          else elements.push(
            <div className="header">
              <form class="submit" action="#">
                <div className="input">
                  <input
                    className='edit-title'
                    onChange={(evt) => setNewTitle(evt.target.value)}
                    type="text"
                    class="form-control"
                    placeholder='Board Name...'
                    required="true"
                    autofocus=""
                    value={newtitle}></input>
                </div>
                <div className="header-icon" onClick={() => rename(match.params.board, newtitle)}>
                  <i class="fas fa-check"></i>
                </div>
              </form>
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