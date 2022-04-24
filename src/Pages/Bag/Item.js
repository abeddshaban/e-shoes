import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../Firebase/firebase";
import "./Item.css";

const Item = ({ id, name, imgurl, details, color, price, size, shoesID }) => {
  const RemoveItem = async () => {
    try {
      await deleteDoc(
        doc(
          db,
          "users",
          auth.currentUser ? auth.currentUser.email : "guest",
          "bag",
          shoesID
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div key={id} className="item">
      <img src={imgurl} alt={name} className="item_img" />
      <div className="item_section">
        <section className="item_section_top">
          <span>{name}</span>
          <span>{price}</span>
        </section>
        <section className="item_section_bottom">
          <span className="bottom_span">{details}</span>
          <span className="bottom_span">color: {color}</span>
          <span className="bottom_span">size: {size}</span>
        </section>
        <button onClick={RemoveItem} className="bottom_removeitem_btn">
          remove item
        </button>
      </div>
    </div>
  );
};

export default Item;
