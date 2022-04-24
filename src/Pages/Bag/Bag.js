import "./Bag.css";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";

function Bag() {
  const [user, setUser] = useState([]);
  const [available, setAvailable] = useState(false);
  const [bag, setBag] = useState([]);

  const userRef = doc(db, "users", auth.currentUser.email);
  const userSnap = getDoc(userRef);

  useEffect(() => {
    userSnap.then((res) => {
      setUser(res.data());
      if (!user == "") {
        if (available == false) {
          setAvailable(true);
        }
      } else {
        if (available == true) {
          setAvailable(false);
        }
      }
    });
  }, []);

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
      console.log(bag, "bag");
    });
  }, []);

  return (
    <div className="bag_page">
      <section className="bag_page_S_bag_items">
        <span>
          {!available
            ? null
            : bag.map(({ id, data: { name, imgurl } }) => (
                <span key={id}>
                  <img src={imgurl} alt={name} style={{ width: "240px" }} />
                  <p>{name}</p>
                </span>
              ))}
        </span>
      </section>
      <section className="bag_page_S_bag_items_info">info</section>
    </div>
  );
}
export default Bag;
