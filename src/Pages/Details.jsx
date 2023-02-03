import React from "react";
import useProducts from "../Hooks/useProducts";
import PlaceholderCards from "../Components/MorePlaceholder";
import ProductCards from "../Components/MoreInfoCards";

const MoreInfo = () => {
  const [products, loading] = useProducts();

  return (
    <div className="cardsArea">
      {loading ? <PlaceholderCards /> : <ProductCards products={products} />}
    </div>
  );
};

export default MoreInfo;
