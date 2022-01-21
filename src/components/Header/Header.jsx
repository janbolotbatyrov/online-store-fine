import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__top">
          <div className="header__logo">INE</div>
          <div className="header__catalog">
            <i className="bx bx-menu"></i>
            <span>Каталог</span>
          </div>
          <div className="header__search">
            <input type="text" placeholder="Поиск" />
            <i className="bx bx-search"></i>
          </div>
          <ul className="link">
            <div className="link-item">
              <i className="bx bx-user"></i>
              <span>Профиль</span>
            </div>
            <div className="link-item">
              <i className="bx bx-bar-chart"></i>
              <span>Сравнение</span>
            </div>
            <div className="link-item">
              <i className="bx bx-heart"></i>
              <span>Избранное</span>
            </div>
            <div className="link-item">
              <i className="bx bx-cart-alt"></i>
              <span>Корзина</span>
            </div>
          </ul>
        </div>
        <ul className="header__category">
          <li className="header__item">Смартфоны и планшеты</li>
          <li className="header__item">Ноутбуки, планшеты и компьютеры</li>
          <li className="header__item">Техника для дома</li>
          <li className="header__item">Игры и развлечения</li>
          <li className="header__item">Телевизоры, Аудио-видео, Hi-Fi</li>
          <li className="header__item">Фото и видеотехника</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
