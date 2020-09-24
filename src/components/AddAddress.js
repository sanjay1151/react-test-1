import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Login from "./Login";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddAddress = () => {
  const [door_number, setDoorNumber] = useState("");
  const [street, setStreet] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [landmark, setLandmark] = useState("");
  const [address_type, setAddressType] = useState("");
  const [save_address_as, setSaveAddressAs] = useState("");
  const [contact_person_number, setContactPersonNumber] = useState("");
  const [contact_person, setContactPerson] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");

  let history = useHistory();

  const logOut = () => {
    localStorage.removeItem("auth_key");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    history.push("/login");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");

    const newAddress = {
      door_number,
      street,
      address1,
      address2,
      city,
      country,
      landmark,
      email,
      name,
      address_type,
      save_address_as,
      contact_person_number,
      contact_person,
      zip,
      state,
    };

    axios
      .post(
        "http://13.235.63.108:3000/api/v1/user_profile/create_address",
        newAddress,
        {
          headers: {
            Authorization: localStorage.getItem("auth_key"),
          },
        }
      )

      .then(function (response) {
        console.log(response.data);
        alert(response.data.message);
        if (response.data.response_code === 200) {
          history.push("/address");
        }
      })
      .catch((err) => {
        alert(err + "\nRedirecting to Profile page");
        history.push("/profile");
      });
    console.log(newAddress);
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
          padding: "0",
        }}
      >
        <Card
          variant="outlined"
          style={{ display: "flex", justifyContent: "center", padding: "0" }}
        >
          <CardContent>
            <form
              onSubmit={onSubmit}
              style={{
                padding: "2rem",
                paddingTop: "0",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  marginLeft: "2.25em",
                  marginTop: "0",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                ADD ADDRESS
              </h1>
              <div
                style={{
                  margin: "0.5em",
                  padding: "0.5rem",
                }}
              >
                <TextField
                  id="address_type"
                  value={address_type}
                  onChange={(e) => setAddressType(e.target.value)}
                  required
                  variant="outlined"
                  label="Address Type"
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
                  id="save_address_as"
                  value={save_address_as}
                  onChange={(e) => setSaveAddressAs(e.target.value)}
                  required
                  variant="outlined"
                  label="Save Address as"
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
                  id="door_number"
                  value={door_number}
                  onChange={(e) => setDoorNumber(e.target.value)}
                  required
                  variant="outlined"
                  label="Door Number"
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
                  id="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  variant="outlined"
                  label="Street"
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
                  id="address1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  required
                  variant="outlined"
                  label="Address line 1"
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
                  id="address2"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  variant="outlined"
                  label="Address line 2"
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
                  id="landmark"
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  variant="outlined"
                  label="Landmark"
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
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  variant="outlined"
                  label="City"
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
                  id="zip"
                  type="number"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  required
                  variant="outlined"
                  label="Zip"
                  style={{ minWidth: "350px" }}
                  inputProps={{ max: 6 }}
                />
              </div>
              <div
                style={{
                  margin: "0.5em",
                  padding: "0.5rem",
                }}
              >
                <TextField
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                  variant="outlined"
                  label="State"
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
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  variant="outlined"
                  label="Country"
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
                  id="contact_person"
                  value={contact_person}
                  onChange={(e) => setContactPerson(e.target.value)}
                  required
                  variant="outlined"
                  label="Contact Person"
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
                  id="contact_person_number"
                  type="number"
                  value={contact_person_number}
                  onChange={(e) => setContactPersonNumber(e.target.value)}
                  required
                  variant="outlined"
                  label="Contact Person Number"
                  style={{ minWidth: "350px" }}
                />
              </div>
              <div
                style={{
                  margin: "2rem",
                  marginBottom: "0",
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
                    marginLeft: "2rem",
                    fontSize: "1rem",
                  }}
                >
                  Add Address
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddAddress;
