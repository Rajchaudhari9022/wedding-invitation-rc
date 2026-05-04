import React from "react";
import logo from "../assets/rclogo.png";   

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="flex flex-col items-center justify-center py-4 gap-2">
        
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 w-auto" />

        {/* Copyright */}
        <p className="text-sm text-white">
          © 2026 RC |  All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}