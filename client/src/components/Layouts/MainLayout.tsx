import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="bg-gray-800 text-white flex-1 flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
