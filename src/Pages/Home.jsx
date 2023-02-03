import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Header from "../Components/Header";
import Products from "../Components/Products";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) navigate("/login");
  }, []);

  return (
    <>
      <Header />
      <Products />
    </>
  );
};

export default Home;
