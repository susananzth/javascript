import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@partial/Navbar";
import Footer from "@partial/Footer";
//import Nav from './partials/Nav'
//import Banner from './components/Banner'
//import Header from './partials/Header'

function Layout() {
  return (
    <>
      <Navbar />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
      <Footer />
      {/*
      Componentes en desuso.
      <Banner />
      <Nav />
      <Header />
       */}
    </>
  );
}

export default Layout;
