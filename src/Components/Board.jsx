import React, { useState,useEffect } from "react";
import { Router, Link, Route, Switch } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import BoardDetails from "./BoardDetails";
import { createBrowserHistory } from "history";
import {useHistory} from 'react-router-dom';
import Menu from "./Menu";

function Board({data}) {
  // const history = createBrowserHistory();
  const history = useHistory();
  const handleClick =() => {
    history.push(`/boarddetail/${data.id}`)
  }
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>hihihi</Card.Text>
        </Card.Body>
          {/* <Link to={{pathname:`/boarddetail/${props.data.id}`}}> */}
            <Button variant="danger"onClick={handleClick}>Details</Button>
          {/* </Link> */}
          {/* <Route path={`${match.path}/boarddetail/:id`} component={BoardDetails} /> */}
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Board;
