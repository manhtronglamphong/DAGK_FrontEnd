import React, { useState, useEffect } from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { createBrowserHistory } from "history";
import Menu from "../../../Components/Menu";
import './Board.css';
import axios from 'axios';

function Board({ data, history }) {
  // const history = createBrowserHistory();
  const handleClick = (board) => {
    console.log(history)
    history.push(`/task/${board}`)
  }
  const deleteBoard = (username, name) => {
    const data = { username: username, name: name }
    const deleteboard = async () => {
      await axios.post('https://dagk-back-end.herokuapp.com/board/deleteBoard', data)
        .then(function (response) {
        })
        .catch(function (error) {
          alert(error);
        });
      window.location.reload(true);
    }
    deleteboard();
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title className="card-text" onClick={() => handleClick(data.name)}>{data.name}</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
        <div className="delete-button" onClick={(e) => { if (window.confirm('Are you sure you wish to delete ' + data.name + '?')) deleteBoard(localStorage.getItem('username'), data.name) }}>
          {/* <Button style={{marginLeft:'26%'}} variant="danger" onClick={handleClick}>Details</Button> */}
          <i class="fas fa-trash-alt"></i>
        </div>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </div >
  );
}

export default Board;
