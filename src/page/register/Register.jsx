import { useState, React } from "react";
import "./register.css";
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const act_register = () => {
    if (pass !== confirm) {
      alert("Password do not match!");
      return;
    }
    const data = { username: username, password: pass }
    const postUser = async () => {
      await axios.post('https://dagk-back-end.herokuapp.com/user/register', data)
        .then(function (response) {
          alert('Registered');
        })
        .catch(function (error) {
          alert(error);
        });
    }
    postUser();
  }
  return (
    <div class="wrapper">
      <form class="form-signin" action="#">
        <h2 class="form-signin-heading">Register</h2>
        <input
          onChange={(evt) => setUsername(evt.target.value)}
          type="text"
          class="form-control"
          name="username"
          placeholder="Username"
          required="true"
          autofocus=""
          value={username}
        />
        <input
          onChange={(evt) => setPass(evt.target.value)}
          value={pass}
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
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

        <button class="btn btn-lg btn-primary btn-block" type='submit' onClick={(e) => { e.preventDefault(); act_register() }}>
          Register
        </button>
      </form>
    </div>
  );
}
