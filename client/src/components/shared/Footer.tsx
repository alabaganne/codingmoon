import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark-5 text-gray-300 text-sm">
      <div className="mx-auto container py-6 flex-between">
        <div>All rights reserved 2023 - 2024</div>
        <div className="flex gap-6">
          <Link to="/" className="hover:underline hover:text-white">
            FAQs
          </Link>
          <Link to="/" className="hover:underline hover:text-white">
            Terms of Use
          </Link>
          <Link to="/" className="hover:underline hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
