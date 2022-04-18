import "./ShoesID.css";

import { useLocation } from "react-router-dom";
import { Fragment, useState } from "react";

const ShoesID = () => {
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  let value = location.state.data;

  // console.log(location.state.data, " useLocation Hook");

  // console.log(location.state.data.imgurl.imgurl);

  // [value.sizes.sizes].map((x) => {
  //   console.log(x);
  // });

  // console.log(value.sizes.sizes);

  return (
    <div className="shoesID__page">
      <img
        className="shoesID_img"
        src={value?.imgurl.imgurl}
        alt={value?.imgurl.imgurl}
        onLoad={() => setLoading(false)}
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
      </section>
    </div>
  );
};

export default ShoesID;
