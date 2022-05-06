import "./CheckoutItem.css";

export const CheckoutItem = ({
  id,
  name,
  imgurl,
  details,
  color,
  price,
  size,
  shoesID,
  docID,
}) => {
  return (
    <div key={id}>
      - {name}| {size}
    </div>
  );
};
