import React from "react";
import HeaderTop from "../E-commerceComponents/HeaderTop";
import HeaderMain from "@/E-commerceComponents/HeaderMain";
import Navbar from "@/E-commerceComponents/Navbar";
import Hero from "../E-commerceComponents/Hero";
import NewProducts from "@/E-commerceComponents/NewProducts";
import Testimonial from "../E-commerceComponents/Testimonial";
import MobNavbar from "@/E-commerceComponents/MobNavBar";
import Footer from "@/E-commerceComponents/Footer";
import PopupAddToCart from "@/E-commerceComponents/PopupAddToCart";
import { useState, createContext } from "react";

export const popupContext = createContext();

const Ecommerce = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };

  const showPopup = () => {
    setIsVisible(true);
  };

  return (
    <popupContext.Provider
      value={{
        closePopup: handleClose,
        visible: isVisible,
        popup: showPopup,
      }}
    >
      <main className="h-fit">
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <Hero />
        <NewProducts />
        <Testimonial />
        <MobNavbar />
        <Footer />
        <PopupAddToCart />
      </main>
    </popupContext.Provider>
  );
};

export default Ecommerce;
