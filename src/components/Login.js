import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  localStorage.removeItem("auth_key");
  localStorage.removeItem("email");

  const onSubmit = (e) => {
    e.preventDefault();

    const signIn = {
      session: {
        email,
        password,
      },
    };

    axios
      .post(" http://13.235.63.108:3000/login", signIn)
      .then(function (response) {
        console.log(response.data);

        if (response.data.response_code === 200) {
          localStorage.setItem("auth_key", response.data.auth_token);
          localStorage.setItem("email", response.data.user_info.email);
          localStorage.setItem("name", response.data.user_info.first_name);
          alert(response.data.message);
          history.push("/profile");
        }
      });
  };

  return (
    <div
      className="Login"
      style={{
        backgroundColor: "#F5F6F7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Card
        variant="outlined"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <form
            onSubmit={onSubmit}
            style={{
              padding: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                marginLeft: "3.25em",
                padding: "0.5rem",
                justifyContent: "center",
                color: "#1F2667",
              }}
            >
              SIGN IN
            </h1>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
                label="Email"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5em",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                id="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
                label="Password"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "2rem",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  paddingRight: "4rem",
                  paddingLeft: "4rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                  marginLeft: "4rem",
                  fontSize: "1rem",
                }}
              >
                SIGN IN
              </Button>
            </div>
            <div>
              <hr />
              <div
                style={{
                  padding: "10px",
                  paddingTop: "5px",
                  alignItems: "center",
                  marginLeft: "10px",
                  display: "flex",
                }}
              >
                <p style={{ fontWeight: "400", fontSize: "1.25rem" }}>
                  Create an Account?
                </p>
                <span style={{ marginLeft: "6rem" }}>
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", fontSize: "1.25rem" }}
                  >
                    SIGN UP
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
