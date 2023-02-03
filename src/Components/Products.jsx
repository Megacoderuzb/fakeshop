import React from "react";
import useProducts from "../Hooks/useProducts";
import PlaceholderCards from "./PlaceholderCards";
import ProductCards from "./ProductCards";

const Products = () => {
  const [products, loading] = useProducts();

  return (
    <div className="container py-3">
      {loading ? <PlaceholderCards /> : <ProductCards products={products} />}
    </div>
  );
};

export default Products;
