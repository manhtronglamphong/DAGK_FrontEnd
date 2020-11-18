import { useState, React } from 'react'
import "./Tag.css"
import axios from "axios";

export default function Tag(props) {
    const [edit, setEdit] = useState(false);
    const [newtitle, setNewTitle] = useState(props.title);
    const handleClick = () => {
        setEdit(!edit);
    }
    const rename = (id, newname) => {
        const data = { id: id, newName: newname }
        const renametag = async () => {
            console.log(data);
            await axios.post('https://dagk-back-end.herokuapp.com/tag/renameTag', data)
                .then(function (response) {
                })
                .catch(function (error) {
                    alert(error);
                });
            window.location.reload(true);
        }
        renametag();
    }
    const deleteTag = (id) => {
        const data = { id: id }
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
            {(() => {
                const elements = [];
                if (!edit)
                    elements.push(
                        <div style={{ marginLeft: '2%', marginRight: '2%', marginTop: '1%' }}>
                            <div className="container">
                                <div className="div-line-left" >
                                    {props.title}
                                </div>
                                <div className="div-line-right" onClick={handleClick}>
                                    <i class="fas fa-pen"></i>
                                </div>
                            </div>
                            <div className="container" >
                                <div className="div-line-right" onClick={(e) => { if (window.confirm('Are you sure you wish to delete ' + props.title + '?')) deleteTag(props.id) }}>
                                    <i class="fas fa-trash-alt"></i>
                                </div>
                            </div>
                        </div>
                    )
                else elements.push(
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
                        <div className="header-icon" onClick={() => rename(props.id, newtitle)}>
                            <i class="fas fa-check"></i>
                        </div>
                    </form>

                )
                return elements;
            })()}

        </div>
    )
}
