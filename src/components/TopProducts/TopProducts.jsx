import React from "react";
import Product from "../Product/Product";
import "./TopProducts.scss";

const TopProducts = ({ products, title }) => {
  return (
    <div className="top-products">
      <div className="container">
        <div className="top-products__inner">
          <div className="top-products__header">
            <div className="title">{title}</div>
            <div className="top-products__arrow">
              <i className="bx bx-left-arrow-alt"></i>
              <i className="bx bx-right-arrow-alt"></i>
            </div>
          </div>
          <ul className="top-products__items">
            <Product products={products} />
          </ul>
          <div className="overflow overflow-1"></div>
          <div className="overflow overflow-2"></div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
