import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div class="wrapper">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please login</h2>
        <input
          type="text"
          class="form-control"
          name="username"
          placeholder="Email Address"
          required=""
          autofocus=""
        />
        <input
          type="password"
          class="form-control"
          name="password"
          placeholder="Password"
          required=""
        />
        <button class="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}