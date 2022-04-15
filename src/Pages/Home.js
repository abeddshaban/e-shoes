import "./Styles/Home.css";
import { useEffect, useState } from "react";

import { db } from "../Firebase/firebase.js";
import { collection, limit, onSnapshot } from "firebase/firestore";

import { ProductItem } from "../Components/ProductItem/ProductItem";

const Home = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "shoes"), (snapshot) => {
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
        {shoes.map(({ id, data: { name, img, price, details, color, sizes } }) => (
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
        ))}
      </section>
    </>
  );
};

export default Home;
