import React, { useState,useEffect } from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import BoardDetails from "./BoardDetails";
import { createBrowserHistory } from "history";
import Menu from "./Menu";

function Board(props) {
  const history = createBrowserHistory();
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Text>hihihi</Card.Text>
        </Card.Body>
          <Link to={{pathname:`/boarddetail/${props.data.id}`}}>
            <Button variant="danger">Details</Button>
          </Link>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Board;
