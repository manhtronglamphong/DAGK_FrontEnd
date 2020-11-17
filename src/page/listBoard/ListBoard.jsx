import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import Board from "./components/Board";
import { useHistory } from "react-router-dom";
import Menu from "../../Components/Menu";
import AddBoard from "../../Components/AddBoard";
import "./ListBoard.css"

function ListBoard() {
  localStorage.setItem('username', 'meo_lamphong')
  const history = useHistory();
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [newboard, setNewBoard] = useState('');
  const newBoard = () => {
    if (newboard === '' || !newboard) {
      alert("Board's name can't be blank!");
      return;
    }
    const data = { username: localStorage.getItem('username'), name: newboard }
    const postBoard = async () => {
      await axios.post('https://dagk-back-end.herokuapp.com/board/newBoard', data)
        .then(function (response) {
          setAdd(!add);
        })
        .catch(function (error) {
          alert(error);
        });
      window.location.reload(true);
    }
    postBoard();
  }
  const handleClick = () => {
    setAdd(!add);
  }
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
      <Menu />
      <br />
      <div className="ml-5 list-board">
        <Row class="row-board ">
          <Col xs={2} style={{ maxWidth: '16.1%', marginBottom: '20px' }}>
            <div onClick={handleClick}>
              <AddBoard></AddBoard>
              <br />
            </div>
          </Col>
          {(() => {
            const elements = [];
            if (add)
              elements.push(
                <Col xs={2} style={{ maxWidth: '16.1%', marginBottom: '20px' }}>
                  <form class="submit" action="#">
                    <div>
                      <div className="input">
                        <input
                          onChange={(evt) => setNewBoard(evt.target.value)}
                          type="text"
                          class="form-control"
                          placeholder="Board Name..."
                          required="true"
                          autofocus=""
                          value={newboard}></input>
                      </div>
                      <div className="header-icon" onClick={newBoard}>
                        <i class="fas fa-check" ></i>
                      </div>
                    </div>
                  </form>
                </Col>
              )
            return elements;
          })()}
          {data.map((item) => (
            <Col xs={2} style={{ maxWidth: '16.1%', marginBottom: '20px' }}>
              <Board data={item} history={history}></Board>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ListBoard;
