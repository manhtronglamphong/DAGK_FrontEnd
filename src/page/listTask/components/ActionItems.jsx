import { useState, React } from "react";
import "./ActionItems.css";
import Tag from "./Tag";
import axios from "axios";

export default function ActionItems(props) {
    const [add, setAdd] = useState(false);
    const [newtag, setNewTag] = useState('');
    const newTag = () => {
        if (newtag === '' || !newtag) {
            alert("Board's name can't be blank!");
            return;
        }
        const data = { username: localStorage.getItem('username'), name: newtag, board: props.board, column: 'Action items' }
        const postBoard = async () => {
            await axios.post('https://dagk-back-end.herokuapp.com/tag/newTag', data)
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
    };
    return (
        <div className="div-backgrounddd">
            <div className="div-title">Action Items</div>
            <div className="div-adddd" onClick={handleClick}>
                <div>
                    <i style={{ marginTop: "12px" }} class="fas fa-plus"></i>
                </div>
            </div>
            {(() => {
                const elements = [];
                if (add)
                    elements.push(
                        <form class="submit" action="#">
                            <div style={{ width: '96%', marginLeft: '2%', marginTop: '10px' }}>
                                <div className="input">
                                    <input
                                        onChange={(evt) => setNewTag(evt.target.value)}
                                        type="text"
                                        class="form-control"
                                        placeholder="Task..."
                                        required="true"
                                        autofocus=""
                                        value={newtag}></input>
                                </div>
                                <div className="header-icon" onClick={newTag}>
                                    <i class="fas fa-check" ></i>
                                </div>
                            </div>
                        </form>
                    )
                return elements;
            })()}
            {props.value.map((item) => {
                if (item.column === "Action items")
                    return (
                        <div className="div-listtt">
                            <div>
                                <Tag board={props.board} title={item.name} column='Action items'></Tag>
                            </div>
                        </div>
                    );
            })}
            <br />
        </div>
    );
}
