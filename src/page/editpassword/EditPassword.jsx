import { useState, React } from "react";
import "./editpassword.css";
import axios from 'axios';

export default function EditPassword() {
  const [pass, setPass] = useState("");
  const [newpass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const act_editpass = () => {
    if (newpass !== confirm) {
      alert("Password do not match!");
      return;
    }
    const data = { username: localStorage.getItem("username"), password: pass, newpassword: newpass }
    const postUser = async () => {
      await axios.post('https://dagk-back-end.herokuapp.com/user/editpassword', data)
        .then(function (response) {
          alert('Change password successfully');
        })
        .catch(function (error) {
          alert(error);
          return;
        });
    }
    postUser();
  }
  return (
    <div class="wrapper">
      <form class="form-signin" action="#">
        <h2 class="form-signin-heading">Change Password</h2>
        <input
          onChange={(evt) => setPass(evt.target.value)}
          type="password"
          class="form-control"
          name="username"
          placeholder="Password"
          required="true"
          autofocus=""
          value={pass}
          style={{ marginBottom: "0px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0px" }}
        />
        <input
          onChange={(evt) => setNewPass(evt.target.value)}
          value={newpass}
          type="password"
          class="form-control"
          name="password"
          placeholder="New password"
          required="true"
          style={{ marginBottom: "0px", borderBottomLeftRadius: "0", borderBottomRightRadius: "0px" }}
        />
        <input
          value={confirm}
          onChange={(evt) => setConfirm(evt.target.value)}
          type="password"
          class="form-control"
          name="password"
          placeholder="Confirm password"
          required="true"
        />

        <button class="btn btn-lg btn-primary btn-block" type='submit' onClick={(e) => { e.preventDefault(); act_editpass() }}>
          Save
        </button>
      </form>
    </div>
  );
}
