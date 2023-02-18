import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="bg-gray-800 text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
