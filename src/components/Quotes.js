import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import axios from "axios";
import Spinner from "./Spinner";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "../index.css";

const Quotes = () => {
  // const email = localStorage.getItem("email");
  // const name = localStorage.getItem("name");

  const requestData = {
    seller: {
      name: "test",
      country_phone_pin: "+91",
      phone: "8987345678",
      email: "dilipkumarm219@gmail.com",
      pick_up_address_id: 1,
    },
    shipments: [
      {
        delivery_adress_id: 2,
        name: "dilip",
        country_phone_pin: "+91",
        phone: "8989898989",
        email: "dilipkumarm219@gmail.com",
        is_cod: false,
        quantity: 1,
        length: "10",
        breadth: "10",
        height: "10",
        weight: "13500",
        pickup_date: "2020-07-18T04:52:09.000Z",
        product: "air mac",
        product_value: 50000,
        matter_description: "laptop",
        cargo_type: "general",
        surface_category: "",
        unit: "cm",
        need_insurance: false,
        is_commercial: false,
        is_document: false,
      },
      {
        delivery_adress_id: 2,
        name: "dilip",
        country_phone_pin: "+91",
        phone: "8989898989",
        email: "dilipkumarm219@gmail.com",
        is_cod: false,
        quantity: 1,
        length: "10",
        breadth: "10",
        height: "10",
        weight: "13500",
        pickup_date: "2020-07-18T04:52:09.000Z",
        product: "air mac",
        product_value: 50000,
        matter_description: "laptop",
        cargo_type: "general",
        surface_category: "",
        unit: "cm",
        need_insurance: false,
        is_commercial: false,
        is_document: false,
      },
    ],
  };

  let history = useHistory();

  const [suppliers, setSuppliers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [requestStatus, setRequestStatus] = useState("not-requested");

  const logOut = () => {
    localStorage.removeItem("auth_key");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    history.push("/login");
  };

  useEffect(() => {
    const quote = async () => {
      if (!localStorage.getItem("auth_key")) {
        history.push("/login");
        alert("You are not logged in!");
      } else {
        await axios
          .post(
            "http://13.235.63.108:3000/api/v1/user_profile/get_all_quote",
            requestData,
            {
              headers: {
                Authorization: localStorage.getItem("auth_key"),
              },
            }
          )
          .then(function (response) {
            if (response.data) {
              setRequestStatus("requested");
            }
            const s = [];
            Object.entries(response.data).map((k) => {
              return k[1].data.map((item) => {
                return item.quotes.suppliers.map((r) => s.push(r));
              });
            });
            setSuppliers(s);
            setIsLoading(false);
            console.log(s);
          })
          .catch((err) => {
            alert(err + "\nRedirecting to Profile page");
            history.push("/profile");
          });
      }
    };
    if (requestStatus !== "requested") {
      quote();
    }
  }, [requestData, history, requestStatus]);

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
        {suppliers.map((supplier) => {
          return (
            <div key={uuidv4()}>
              <Card
                variant="outlined"
                style={{
                  alignItems: "center",
                  width: "300px",
                  margin: "1rem",
                  minHeight: "300px",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 0, paddingTop: "50%" }}
                    image={supplier.supplier_logo}
                  />
                  <CardContent>
                    <ul style={{ listStyle: "none" }}>
                      <li>Supplier Name: {supplier.supplier_name}</li>
                      <li>Service Name: {supplier.service_name}</li>
                      <li>Product Name: {supplier.product_name}</li>
                      <li>Duration: {supplier.duration_in_hrs}hrs</li>
                      <li>Total Price:$ {supplier.total_price}</li>
                    </ul>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Quotes;
