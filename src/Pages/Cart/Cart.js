import "./Cart.css";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";

function Cart() {
  const [user, setUser] = useState([]);
  const [available, setAvailable] = useState(false);

  const userRef = doc(db, "users", auth.currentUser.email);
  const userSnap = getDoc(userRef);

  useEffect(() => {
    userSnap.then((res) => {
      setUser(res.data());
      if (!user == "") {
        setAvailable(true);
      } else {
        setAvailable(false);
      }
      console.log(available);
    });
  }, []);

  // console.log("user", user.bag.itemID);

  return (
    <div className="cart_page">
      <section className="cart_page_S_bag_items">
        {/* <span>{!user ? user.bag.itemID : null}</span> */}
        <span>{available ? user.bag.itemID : null}</span>
      </section>
      <section className="cart_page_S_bag_items_info">info</section>
    </div>
  );
}
export default Cart;
