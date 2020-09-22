import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

const ViewAddress = () => {
  let history = useHistory();

  const [requestStatus, setRequestStatus] = useState("not-requested");
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const logOut = () => {
    localStorage.removeItem("auth_key");
    localStorage.removeItem("email");
    history.push("/login");
  };

  useEffect(() => {
    const addressDetails = async () => {
      if (!localStorage.getItem("auth_key")) {
        history.push("/login");
        alert("You are not logged in!");
      } else {
        await axios
          .post(
            "http://13.235.63.108:3000/api/v1/user_profile/get_address",
            {},
            {
              headers: {
                Authorization: localStorage.getItem("auth_key"),
              },
            }
          )
          .then(function (response) {
            console.log(response.data);

            if (response.data) {
              setRequestStatus("requested");
              setIsLoading(false);
            }

            if (response.data.response_code === 200) {
              const addressDetails = [];
              response.data.address.map((r) => addressDetails.push(r));
              setAddresses(addressDetails);
            } else {
              alert("You dont have any stored Address, add Address now");
              history.push("/addAddress");
            }
          });
      }
    };
    if (requestStatus !== "requested") {
      addressDetails();
    }
  }, [history, requestStatus]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      <header style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button onClick={logOut}>Log Out</Button>
      </header>
      <div
        style={{
          backgroundColor: "#F5F6F7",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "0",
        }}
      >
        {addresses.map((address) => {
          return (
            <div key={address.id}>
              <Card
                variant="outlined"
                style={{
                  alignItems: "center",
                  width: "300px",
                  margin: "1rem",
                  minWidth: "25em",
                }}
              >
                <CardContent>
                  <ul style={{ listStyle: "none" }}>
                    <li>Address Type: {address.address_type}</li>
                    <li>Address Name: {address.save_address_as}</li>
                    <li>Door No: {address.door_number}</li>
                    <li>Street: {address.street}</li>
                    <li>Address 1: {address.address_1}</li>
                    <li>Address 2: {address.address_2}</li>
                    <li>Landmark: {address.landmark}</li>
                    <li>City: {address.city}</li>
                    <li>Zip: {address.zip}</li>
                    <li>State: {address.state}</li>
                    <li>Country: {address.country}</li>
                    <li>Contact Person: {address.contact_person}</li>
                    <li>
                      Contact Person Number: {address.contact_person_number}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ViewAddress;
