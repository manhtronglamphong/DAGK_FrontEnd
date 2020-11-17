import React from 'react'
import "./Tag.css"
import axios from "axios";

export default function Tag(props) {
    const deleteTag = (username, name, board, column) => {
        const data = { username: username, name: name, board: board, column: column }
        const deletetag = async () => {
            await axios.post('https://dagk-back-end.herokuapp.com/tag/deleteTag', data)
                .then(function (response) {
                })
                .catch(function (error) {
                    alert(error);
                });
            window.location.reload(true);
        }
        deletetag();
    }
    return (
        <div>
            <div style={{ marginLeft: '2%', marginRight: '2%', marginTop: '1%' }}>
                <div className="container">
                    <div className="div-line-left" >
                        {props.title}
                    </div>
                    <div className="div-line-right">
                        <i class="fas fa-pen"></i>
                    </div>
                </div>
                <div className="container" >
                    <div className="div-line-right" onClick={(e) => { if (window.confirm('Are you sure you wish to delete ' + props.title + '?')) deleteTag(localStorage.getItem('username'), props.title, props.board, props.column) }}>
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
