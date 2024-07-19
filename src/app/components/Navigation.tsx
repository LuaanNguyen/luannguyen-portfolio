import React from "react";
import { FaCode } from "react-icons/fa6";
import "../globals.css";

export default function Navigation() {
  return (
    <nav className="w-screen">
      <div className="flex justify-between mx-20 mt-10 border border-white p-5 rounded-full items-center">
        <div className="flex gap-5 text-3xl font-bold">
          <FaCode />
          <h1 className="">Luan Nguyen</h1>
        </div>
        <div className="">Social Links</div>
      </div>
    </nav>
  );
}
