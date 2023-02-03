import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import axios from "axios";
import { toast } from "react-toastify";

const MoreInfoCards = () => {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <div className=" container">
        <div className=" d-flex flex-wrap align-items-center gap-3 justify-content-center">
          {product && (
            <div>
              <div
                className="py-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "",
                }}
              >
                <img
                  key={crypto.randomUUID()}
                  width={300}
                  height={300}
                  src={product.image}
                  alt="rasm"
                />

                <div className="px-4">
                  <h3>{`${product.title}`}</h3>
                  <h3>{`Category: ${product.category}`}</h3>
                </div>
              </div>
              <h5 className="py-3 fs-5">{`${product.description}`}</h5>
              <div className="d-flex justify-content-evenly">
                <article>
                  <h4>{`Rating:⭐ ${product?.rating?.rate}`}</h4>
                  <h4>{`Price:💲 ${product.price}`}</h4>
                </article>
                <button className="btn btn-success col-3 fs-4">Buy Now</button>
              </div>
              {/* <h3>{product}</h3> */}
            </div>
          )}

          {!product && <h1>Product not found!</h1>}
        </div>
      </div>
    </>
  );
};

export default MoreInfoCards;
