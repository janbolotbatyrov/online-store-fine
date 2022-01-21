import React from "react";
import "./Promotion.scss";

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="container">
        <div className="title">Акции</div>
        <div className="promotion__items">
          <div className="promotion__item">
            <img
              src="https://static-sl.insales.ru/r/N1uhjfNk51c/fit/469/0/ce/1/plain/files/1/6778/16366202/original/Group_179_44a64edc4aaac4a857f6cf68909a657f.jpg@webp"
              alt=""
            />
          </div>
          <div className="promotion__item">
            <img
              src="https://static-sl.insales.ru/r/TTkjUWC1vGY/fit/469/0/ce/1/plain/files/1/6780/16366204/original/Group_180.jpg@webp"
              alt=""
            />
          </div>
          <div className="promotion__item">
            <img
              src="https://static-sl.insales.ru/r/EC0l8Iv_J7s/fit/469/0/ce/1/plain/files/1/6782/16366206/original/Group_181.jpg@webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
