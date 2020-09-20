import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [mobile, setMobile] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const signUp = {
      first_name: firstName,
      last_name: lastName,
      email,
      password: pass,
      password_confirmation: confirmPass,
      mobile_number: +mobile,
    };

    axios
      .post("http://13.235.63.108:3000/users", signUp)
      .then(function (response) {
        console.log(response.data);
        alert(response.data.message);
      });

    console.log(signUp);

    console.log(JSON.stringify(signUp));
  };

  return (
    <div
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
        style={{ display: "flex", justifyContent: "center" }}
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
              }}
            >
              SIGN UP
            </h1>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
              }}
            >
              <TextField
                id="FirstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                variant="outlined"
                label="First Name"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
              }}
            >
              <TextField
                id="LastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                variant="outlined"
                label="Last Name"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
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
              }}
            >
              <TextField
                id="Password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                required
                variant="outlined"
                label="Password"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5em",
              }}
            >
              <TextField
                id="ConfirmPassword"
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
                variant="outlined"
                label="Confirm Password"
                style={{ minWidth: "350px" }}
              />
            </div>
            <div
              style={{
                margin: "0.5em",
                padding: "0.5rem",
              }}
            >
              <TextField
                id="Mobile"
                type="number"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                variant="outlined"
                label="Mobile Number"
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
                SIGN UP
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
                  Already have an Account?
                </p>
                <span style={{ marginLeft: "3rem" }}>
                  <Link
                    to="/login"
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

export default SignUp;
