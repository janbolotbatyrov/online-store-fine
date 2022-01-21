import React from "react";
import { Catalog, Promotion, TopProducts } from "../../components";

const Home = ({ headphones, phones, powerBank }) => {
  return (
    <div>
      <Catalog />
      <TopProducts title={"Смартфоны и планшеты"} products={phones} />
      <Promotion />
      <TopProducts title={"Наушники"} products={headphones} />
      <Promotion />
      <TopProducts title={"Power Bank"} products={powerBank} />
    </div>
  );
};

export default Home;
