import React from "react";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__block">
            <img
              src="https://tadviser.ru/images/thumb/e/e5/Kv_phone-a828bfcc07.png/840px-Kv_phone-a828bfcc07.png"
              alt=""
            />
            <span>Смартфоны и планшеты</span>
          </div>
          <div className="catalog__items">
            <div className="catalog__item">
              <img
                src="https://filearchive.cnews.ru/img/news/2019/07/15/acerswift7sf71452t02wpwin10black.png"
                alt=""
              />
              <span>Ноутбуки, планшеты и компьютеры</span>
            </div>
            <div className="catalog__item">
              <img
                src="https://garlyn.ru/wp-content/uploads/2021/01/garlyn-mg-3000-mini.png"
                alt=""
              />
              <span>Техника для дома</span>
            </div>
            <div className="catalog__item">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/PS5-Controller-PNG-Image.png"
                alt=""
              />
              <span>Игры и развлечения</span>
            </div>
            <div className="catalog__item">
              <img
                src="https://dvsat.ru/upload/medialibrary/394/3940e99cd9768871a5139549d169ba3f.png"
                alt=""
              />
              <span>Телевизоры, Аудио-видео, Hi-Fi</span>
            </div>
            <div className="catalog__item">
              <img
                src="http://pngimg.com/uploads/photo_camera/photo_camera_PNG7834.png"
                alt=""
              />
              <span>Фото и видеотехника</span>
            </div>
            <div className="catalog__item">
              <img
                src="https://pngimg.com/uploads/washing_machine/washing_machine_PNG15578.png"
                alt=""
              />
              <span>Бытовая техника для дома</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
