import React from "react";
import spinner from "../img/spinner.gif";

const Spinner = () => {
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
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;
