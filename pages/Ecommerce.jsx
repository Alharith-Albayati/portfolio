import React from "react";
import HeaderTop from "../E-commerceComponents/HeaderTop";
import HeaderMain from "@/E-commerceComponents/HeaderMain";
import Navbar from "@/E-commerceComponents/Navbar";
import Hero from "../E-commerceComponents/Hero";
import NewProducts from "@/E-commerceComponents/NewProducts";
import Testimonial from "../E-commerceComponents/Testimonial";
import MobNavbar from "@/E-commerceComponents/MobNavBar";
import Footer from "@/E-commerceComponents/Footer";

const Ecommerce = () => {
  return (
    <main>
      <HeaderTop />
      <HeaderMain />
      <Navbar />
      <Hero />
      <NewProducts />
      <Testimonial />
      <MobNavbar />
      <Footer />
    </main>
  );
};

export default Ecommerce;
