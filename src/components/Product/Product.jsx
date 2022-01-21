import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ products }) => {
  const navigate = useNavigate();
  return products
    ? products.map((product, index) => (
        <li
          key={product.id}
          className="top-products__item"
          onClick={() => navigate(`product${product.id}`)}
        >
          <div className="top-products__img">
            <img src={product.imageUrl} alt="" />
          </div>
          <div className="top-products__name">{product.name}</div>
          <div className="top-products__img-block">
            <i className="bx bx-heart"></i>
            <i className="bx bx-bar-chart"></i>
          </div>
          <div className="top-products__price">
            <span>{product.price} сом</span>
            <i className="bx bx-cart-alt"></i>
          </div>
        </li>
      ))
    : null;
  // return product.map((item, index) => (
  //   <li key={index} className="top-products__item">
  //     <div className="top-products__img">
  //       <img
  //         src="https://static-sl.insales.ru/r/NAJpTlKdOb0/fit/1000/1000/ce/1/plain/images/products/1/4142/414199854/ru-galaxy-a51-a515-sm-a515fzrmser-red-red-204080370__2_.jpg@webp"
  //         alt=""
  //       />
  //       <div className="top-products__img-block">
  //         <i className="bx bx-heart"></i>
  //         <i className="bx bx-bar-chart"></i>
  //       </div>
  //     </div>
  //     <div className="top-products__name">
  //       Смартфон Samsung Galaxy S21 256GB (SM-G991B)
  //     </div>
  //     <div className="top-products__price">
  //       <span>67 990 ₽</span>
  //       <i className="bx bx-cart-alt"></i>
  //     </div>
  //   </li>
  // ));
};

export default Product;
