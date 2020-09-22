import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import Login from "./Login";

const Address = () => {
  let history = useHistory();

  const addAddress = () => {
    history.push("/addAddress");
  };
  const viewAddress = () => {
    history.push("/viewAddress");
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
          onClick={addAddress}
        >
          Add Address
        </Button>

        <Button
          style={{ margin: "1rem" }}
          variant="contained"
          color="primary"
          onClick={viewAddress}
        >
          View Address
        </Button>
      </div>
    </>
  );
};

export default Address;
