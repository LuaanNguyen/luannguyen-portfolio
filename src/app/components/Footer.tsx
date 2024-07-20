import React from "react";

export default function Footer() {
  return (
    <div className="col-span-6 items-center text-center">
      <p className="text-spotify-light-gray">
        @ Luan's Portfolio {new Date().getFullYear()}, Design By{" "}
        <a
          href="https://www.luannguyen.net/"
          className="text-spotify-green font-semibold underline"
        >
          Luan
        </a>
      </p>
    </div>
  );
}
