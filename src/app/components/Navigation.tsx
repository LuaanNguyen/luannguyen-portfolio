import React from "react";
import { FaCode } from "react-icons/fa6";
import "../globals.css";

export default function Navigation() {
  return (
    <nav className="w-screen">
      <div className=" flex justify-between mx-20 mt-10 border border-white p-5 rounded-lg items-center">
        <div className="flex  gap-5 text-3xl font-bold">
          <FaCode />
          <h1 className="text-spotify-green">Luan Nguyen</h1>
        </div>
        <div>Social Links</div>
      </div>
    </nav>
  );
}
