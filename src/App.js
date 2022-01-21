import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/index";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Home from "./pages/Home/Home";

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
        <Routes>
          <Route
            path="/"
            element={
              <Home
                headphones={headphones}
                phones={phones}
                powerBank={powerBank}
              />
            }
          />
          <Route path="/product:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
