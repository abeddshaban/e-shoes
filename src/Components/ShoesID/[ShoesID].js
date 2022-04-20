import "./ShoesID.css";

import { Navigate, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";

const ShoesID = () => {
  const location = useLocation();
  let value = location.state.data;

  const [available, setAvailable] = useState(false);

  const [user, setUser] = useState([]);

  const userRef = doc(
    db,
    "users",
    auth.currentUser ? auth.currentUser.email : "guest"
  );

  const userSnap = getDoc(userRef);

  // useEffect(() => {
  //   if (auth.currentUser.email) {
  //     console.log("what is available", available);
  //     userSnap.then((res) => {
  //       setUser(res.data());
  //     });
  //   }
  // }, [user]);

  const AddToCart = async () => {
    if (auth.currentUser) {
      await setDoc(
        userRef,
        {
          bag: {
            ...user.bag,
            name: value?.name.name,
            price: value?.price.price,
            color: value?.color.color,
            details: value?.details.details,
          },
        },
        { merge: true }
      );
      console.log(user?.bag);
    } else {
      <Navigate to="/signin" replace />;
    }
  };

  return (
    <div className="shoesID__page">
      <img
        className="shoesID_img"
        src={value?.imgurl.imgurl}
        alt={value?.imgurl.imgurl}
      />

      <section className="shoesID__section">
        <span className="shoesID__section_name">{value?.name.name}</span>

        <span className="shoesID__section_border" />

        <span className="shoesID__section_price">{value?.price.price}$</span>

        <ul>
          <li>
            <span>color: {value?.color.color}</span>
          </li>

          <li>
            <span>{value?.details.details}</span>
          </li>
        </ul>

        <span className="shoesID__section_sizes">
          sizes:
          <span className="shoesID__section_sizes_span">
            {value.sizes.sizes.map((size, index) => {
              return (
                <Fragment key={index}>
                  <span className="shoesID__section_sizes_box">{size}</span>
                </Fragment>
              );
            })}
          </span>
        </span>
        <button onClick={AddToCart} className="shoesID__section_addtocart_btn">
          ADD TO CART
        </button>
      </section>
    </div>
  );
};

export default ShoesID;
