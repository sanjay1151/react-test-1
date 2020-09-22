import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Login from "./Login";

const Profile = () => {
  let history = useHistory();

  const quotes = () => {
    history.push("/quotes");
  };
  const address = () => {
    history.push("/address");
  };
  const logOut = () => {
    localStorage.removeItem("auth_key");
    localStorage.removeItem("email");
    history.push("/login");
  };

  return !localStorage.getItem("auth_key") ? (
    <>
      {alert("You are not Logged in")}
      <Login />
    </>
  ) : (
    <>
      <header style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button onClick={logOut}>Log Out</Button>
      </header>
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
        <Button
          style={{ margin: "1rem" }}
          variant="contained"
          color="primary"
          onClick={quotes}
        >
          Quotes
        </Button>
        <Button
          style={{ margin: "1rem" }}
          variant="contained"
          color="primary"
          onClick={address}
        >
          Address
        </Button>
      </div>
    </>
  );
};

export default Profile;
