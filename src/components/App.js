import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import AllProducts from "./components/AllProducts/AllProducts";
import Footer from "./components/Footer/Footer";
import { Catalog, Header, TopProducts, Promotion } from "./components/index";

function App() {
  const [phones, setPhones] = useState();
  const [headphones, setHeadphones] = useState();
  const [powerBank, setPowerBank] = useState();
  useEffect(() => {
    async function getPhones() {
      await axios.get("http://localhost:3001/phones").then((res) => {
        const data = res.data;
        setPhones(data.slice(0, 10));
      });
    }
    getPhones();
    async function getHeadphones() {
      await axios.get("http://localhost:3001/headphones").then((res) => {
        const data = res.data;
        setHeadphones(data.slice(0, 10));
      });
    }
    getHeadphones();

    async function getPowerBank() {
      await axios.get("http://localhost:3001/powerBank").then((res) => {
        const data = res.data;
        setPowerBank(data.slice(0, 10));
      });
    }
    getPowerBank();
  }, []);
  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Catalog />
        <TopProducts title={"Смартфоны и планшеты"} products={phones} />
        <Promotion />
        <TopProducts title={"Наушники"} products={headphones} />
        <Promotion />
        <TopProducts title={"Power Bank"} products={powerBank} />
        <Route path="/product" component={} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
