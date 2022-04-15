import { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem/ProductItem";

import { query, where, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase/firebase";
import { collection } from "firebase/firestore";

import { useLocation } from "react-router-dom";

const ShoesID = () => {
  const [shoes, setShoes] = useState([]);
  const [shoesData, setShoesData] = useState([]);

  const location = useLocation();

  let value = location.state.data;

  // console.log(location.state.data, " useLocation Hook");

  // console.log(location.state.data.imgurl.imgurl);
  // console.log(
  [value.sizes.sizes].map((x) => {
    console.log(x);
  });
  //   ,
  //   "value"
  // );

  // const shoesRef = collection(db, "shoes");

  // const q = query(shoesRef, where("id", "==", "4z5Wk1znWMYEJdvtyljz"));
  // useEffect(() => {
  //   onSnapshot(q, (snapshot) => {
  //     // ..
  //     setShoes(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     );
  //   });
  // }, [q]);

  return (
    <div className="postId__page">
      <img src={value.imgurl.imgurl} alt="" />
      <p>{value.name.name}</p>
      <p>{value.color.color}</p>
      <p>{value.details.details}</p>

      <div>
        sizes:
        {[value.sizes.sizes].map((x) => {
          return <div key={x}>-{x}-</div>;
        })}
      </div>

      {/* <h1>{data ? data.ShoesID : <p>none</p>}</h1> */}
      {/* {shoes.map(
        ({ id, data: { name, img, price, sizes, details, color } }) => (
          <ProductItem
            key={id}
            name={name}
            imgurl={img}
            price={price}
            sizes={sizes}
            details={details}
            color={color}
          />
        )
      )} */}
    </div>
  );
};

export default ShoesID;
