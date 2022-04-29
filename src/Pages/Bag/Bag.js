import "./Bag.css";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import Item from "./Item";
import { Link } from "react-router-dom";

function Bag() {
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
          <Link to="/">search for shoes</Link>
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

        <span className="">Items: {BagSize}</span>

        <span className="">Total: {GetBagTotalPrice(bag)}$</span>
      </section>
    </div>
  );
}
export default Bag;
