import React from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiLogOut,
  FiTrello,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white text-sm shadow">
      <div className="container mx-auto flex-between py-4">
        <div className="flex gap-2">
          <Link className="navlink" to="/dashboard">
            <FiHome className="icon" />
            Dashboard
          </Link>
          <Link className="navlink" to="/campaigns">
            <FiTrello className="icon" />
            Campaigns
          </Link>
          <Link className="navlink" to="/dashboard">
            <FiTrendingUp className="icon" />
            Statistics
          </Link>
        </div>
        <div className="flex gap-2">
          <Link className="navlink" to="/dashboard">
            <FiUser className="icon" />
            Account
          </Link>
          <Link className="navlink" to="/dashboard">
            <FiLogOut className="icon" />
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
