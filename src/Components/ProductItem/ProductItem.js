import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

export const ProductItem = ({
  name,
  imgurl,
  price,
  shoesID,
  sizes,
  details,
  color,
}) => {
  const [data, setData] = useState({
    name: { name },
    imgurl: { imgurl },
    price: { price },
    shoesID: { shoesID },
    sizes: { sizes },
    details: { details },
    color: { color },
  });

  return (
    <div className="product_item">
      <Link to={"/shoes/" + shoesID} state={{ data: data }} className="link">
        <img className="product_item_img" src={imgurl} alt={name} />

        <div className="product_item_info">
          <span className="product_item_name">{name}</span>

          <span className="product_item_price">{price}$</span>
        </div>
      </Link>
    </div>
  );
};
