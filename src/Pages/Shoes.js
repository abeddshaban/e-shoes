import { useEffect, useState } from "react";

import { db } from "../Firebase/firebase";
import { collection, limit, onSnapshot } from "firebase/firestore";

import { ProductItem } from "../Components/ProductItem/ProductItem";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "shoes"), limit(3), (snapshot) => {
      // ...
      setShoes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [shoes]);

  return (
    <div>
      {shoes.map(({ id, data: { name, img, price, itemID } }) => (
        <ProductItem
          key={id}
          name={name}
          imgurl={img}
          price={price}
          itemID={itemID}
        />
      ))}
    </div>
  );
};

export default Shoes;
