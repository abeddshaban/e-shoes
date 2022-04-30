import { TextField } from "@mui/material";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../../Firebase/firebase";
import "./Checkout.css";

const Checkout = () => {
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenb: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
  });

  return (
    <div className="checkout_page">
      <div className="checkout_box">
        <div className="row_div">
          <TextField
            value={userdata.firstname}
            className="textlable"
            required
            label="Fisrt Name"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                firstname: value,
              });
            }}
          />
          <TextField
            value={userdata.lastname}
            className="textlable"
            required
            label="Last Name"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                lastname: value,
              });
            }}
          />
        </div>

        <div className="full_div">
          <TextField
            value={userdata.address}
            sx={{ width: "100%" }}
            className="textlable"
            required
            label="Address"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                address: value,
              });
            }}
          />
        </div>

        <div className="row_div">
          <TextField
            value={userdata.city}
            className="textlable"
            required
            label="City"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                city: value,
              });
            }}
          />

          <TextField
            value={userdata.state}
            className="textlable"
            required
            label="State"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                state: value,
              });
            }}
          />

          <TextField
            value={userdata.postalcode}
            className="textlable"
            required
            label="Postal Code"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                postalcode: value,
              });
            }}
          />
        </div>

        <div className="row_div">
          <TextField
            value={userdata.email}
            className="textlable"
            required
            label="Email"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                email: value,
              });
            }}
          />

          <TextField
            value={userdata.phonenb}
            className="textlable"
            required
            label="Phone Number"
            variant="outlined"
            onChange={(e) => {
              const { value } = e.target;
              setuserdata({
                ...userdata,
                phonenb: value,
              });
            }}
          />
        </div>

        {(userdata.firstname == "") &
        (userdata.lastname == "") &
        (userdata.email == "") &
        (userdata.phonenb == "") &
        (userdata.address == "") &
        (userdata.city == "") &
        (userdata.state == "") &
        (userdata.postalcode == "") ? null : (
          <div className="overview">
            <div>
              {userdata.firstname} {userdata.lastname}
            </div>

            <div>{userdata.address}</div>

            <div>
              {userdata.city} {userdata.state} {userdata.postalcode}
            </div>

            <div>{userdata.email}</div>

            <div>{userdata.phonenb}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
