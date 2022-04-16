import { useLocation } from "react-router-dom";

const ShoesID = () => {
  const location = useLocation();

  let value = location.state.data;

  // console.log(location.state.data, " useLocation Hook");

  // console.log(location.state.data.imgurl.imgurl);

  [value.sizes.sizes].map((x) => {
    console.log(x);
  });

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
    </div>
  );
};

export default ShoesID;
