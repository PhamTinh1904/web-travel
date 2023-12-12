import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Toaster position="top-center" />
      <Footer />
    </>
  );
};

export default Layout;
