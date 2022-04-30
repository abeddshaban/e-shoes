import "./Bag.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import Item from "./Item";
import { Link, useNavigate } from "react-router-dom";

function Bag() {
  let navigate = useNavigate();
  const [bag, setBag] = useState([]);
  const [BagSize, setBagSize] = useState();

  const bagRef = collection(db, "users", auth.currentUser.email, "bag");

  const updateBag = () => {
    onSnapshot(bagRef, (snapshot) => {
      // ...

      setBag(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );

      setBagSize(snapshot.size);
    });
  };

  useEffect(() => {
    updateBag();
  }, []);

  const GetBagTotalPrice = (basket) =>
    basket?.reduce(
      (amount, item) => Number(item.data.price) + Number(amount),
      0
    );

  return (
    <div className="bag_page">
      <section className="bag_page_S_bag_items">
        {bag.length === 0 ? (
          <>
            It looks like you do not have any items in your cart.{" "}
            <Link to="/" className="bag_page_link">
              Click here
            </Link>{" "}
            to search for some !{" "}
          </>
        ) : (
          bag.map(
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
              <Item
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
          )
        )}
      </section>
      <section className="bag_page_S_bag_items_info">
        <span className="info_summary">Summary</span>

        <span className="info_bagsize">
          <span>Items:</span>
          <span>{BagSize}</span>
        </span>

        <span className="info_totalprice">
          <span>Total:</span>
          <span className="info_totalprice_price">
            ${GetBagTotalPrice(bag)}
          </span>
        </span>

        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="info_btn"
        >
          Checkout
        </button>
      </section>
    </div>
  );
}
export default Bag;
