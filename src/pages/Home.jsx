import React from "react";
import HeaderAfterLog from "../components/navbar/headerAfterLog";
import ProductHome from "../components/home/Product";
import PromotionIndicators from "../components/home/PromotionIndicators";
import CategoryIndicators from "../components/home/CategoryIndicators";

const Home = () => {
  return (
    <>
      <HeaderAfterLog />
      <main>
        <div className="container">
          <PromotionIndicators />
          <div className="category">
            <h1>Category</h1>
            <p>What are you currently looking for</p>
          </div>
          <CategoryIndicators />
          <div className="product">
            <h1>New</h1>
            <p>You’ve never seen it before!</p>
          </div>
          <ProductHome />
          <div className="product">
            <h1>Popular</h1>
            <p>Find clothes that are trending recently</p>
          </div>
          <ProductHome/>
        </div>
      </main>
    </>
  );
};

export default Home;
