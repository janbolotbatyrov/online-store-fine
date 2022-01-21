import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const { detail, getDetail } = useContext(productContext);

  useEffect(() => {
    getDetail(id);
  }, []);

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail__inner">
          <div className="title">
            {detail.name} {detail.memory}GB {detail.color}{" "}
          </div>
          <div className="product-detail__grade">
            <div className="product-detail__grade-left">
              <div className="product-detail__stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <span>(0)</span>
              </div>
              <div className="product-detail__favorite">
                <i className="bx bx-heart"></i> В избранное
              </div>
            </div>
            <div className="product-detail__grade-right">
              <span>арт. 14979</span>
            </div>
          </div>
          <div className="product-detail__content">
            <div className="product-detail__image">
              <img src={detail.imageUrl} alt="" />
            </div>
            <div className="product-detail__info">
              <div className="product-detail__info-top">
                <div className="product-detail__color">
                  <p>Цвет</p>
                  <span>черный</span>
                  <span>красный</span>
                  <span>белый</span>
                </div>
                <div className="product-detail__memory">
                  <p>Объем памяти</p>
                  <span>32GB</span>
                  <span>64GB</span>
                </div>
              </div>
              <div className="product-detail__specifications">
                <div className="product-detail__title">Характеристики</div>
                <p>
                  <span>Цвет: </span>
                  {detail.color}
                </p>
                <p>
                  <span>Экран: </span>
                  {detail.screen}
                </p>
                <p>
                  <span>Оперативная память: </span> {detail.ram} ГБ
                </p>
                <p>
                  <span>Память: </span>
                  {detail.memory} ГБ
                </p>
                <p>
                  <span>4 камеры: </span>
                  {detail.camera}
                </p>
                <p>
                  <span>Аккумулятор: </span>
                  {detail.battery} мАч
                </p>
                <a href="#">Все характеристики</a>
              </div>
              <div className="product-detail__description">
                <div className="product-detail__title">Описание</div>
                <div className="product-detail__text">
                 {detail.description}
                </div>
              </div>
            </div>
            <div className="product-detail__price">
              <p>{detail.price}.00 сом</p>
              <span>
                В корзину <i class="bx bx-cart-alt"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
