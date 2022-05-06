import { TextField } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Checkout.css";
import { CheckoutItem } from "./CheckoutItem";

const Checkout = () => {
  const location = useLocation();
  let value = location.state.bag;
  let totalPrice = location.state.totalPrice;

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

  const SubmitOrder = () => {
    console.log("order");
  };
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
            label="Phone Number (International format)"
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

        {!userdata.firstname == "" &&
        !userdata.lastname == "" &&
        !userdata.email == "" &&
        !userdata.phonenb == "" &&
        !userdata.address == "" &&
        !userdata.city == "" &&
        !userdata.state == "" &&
        !userdata.postalcode == "" ? (
          <>
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

              <div>Total: ${totalPrice}</div>

              <hr />
              <div>Items:</div>
              {value.map(
                ({
                  id,
                  data: {
                    name,
                    imgurl,
                    details,
                    color,
                    price,
                    size,
                    shoesID,
                    docID,
                  },
                }) => (
                  <CheckoutItem
                    key={id}
                    id={id}
                    docID={docID}
                    name={name}
                    imgurl={imgurl}
                    details={details}
                    color={color}
                    price={price}
                    size={size}
                    shoesID={shoesID}
                  />
                )
              )}
              <div>
                <button onClick={SubmitOrder}>order</button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Checkout;
