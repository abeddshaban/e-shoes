import "./Styles/Home.css";
import { useEffect, useState } from "react";

import { db } from "../Firebase/firebase.js";
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  query,
} from "firebase/firestore";

import { ProductItem } from "../Components/ProductItem/ProductItem";

const Home = () => {
  const [shoes, setShoes] = useState([]);

  const shoesRef = collection(db, "shoes");
  const q = query(shoesRef, limit(6));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      // ...
      setShoes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <section className="home_section">
        {shoes.map(
          ({ id, data: { name, img, price, details, color, sizes } }) => (
            <ProductItem
              key={id}
              name={name}
              imgurl={img}
              price={price}
              shoesID={id}
              details={details}
              color={color}
              sizes={sizes}
            />
          )
        )}
      </section>
    </>
  );
};

export default Home;
