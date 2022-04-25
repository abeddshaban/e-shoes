import "./Bag.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import Item from "./Item";
import { Link } from "react-router-dom";

function Bag() {
  const [bag, setBag] = useState([]);

  const bagRef = collection(
    db,
    "users",
    auth.currentUser ? auth.currentUser.email : "guest",
    "bag"
  );

  useEffect(() => {
    onSnapshot(bagRef, (snapshot) => {
      // ...
      setBag(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="bag_page">
      <section className="bag_page_S_bag_items">
        {bag.length === 0 ? (
          <Link to="/">search for shoes</Link>
        ) : (
          bag.map(
            ({
              id,
              data: { name, imgurl, details, color, price, size, shoesID },
            }) => (
              <Item
                key={id}
                id={id}
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
      <section className="bag_page_S_bag_items_info">info</section>
    </div>
  );
}
export default Bag;
