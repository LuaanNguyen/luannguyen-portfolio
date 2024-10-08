"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl py-10 max-md:py-4"
      id="#profile"
    >
      <div className="flex flex-col gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center mx-4">
          <Image
            src="/Luan.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            objectFit="none" // change to suit your needs
            className="rounded-[25px] "
          ></Image>
        </BackgroundGradient>

        <PersonalStatement />
        <Location />
        <Booking />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg px-5">
      <div className="flex items-center gap-1 font-semibold">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Tempe, AZ
      </div>
    </div>
  );
}

function Booking() {
  const email = "luanthiennguyen2003@gmail.com"; // Replace with the email you want to copy
  const phoneNum = "9176574242";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert("Phone bumber copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex px-6 mt-4 gap-4">
      <button
        type="button"
        className="flex min-w-12 items-center text-sm gap-1 px-3 py-3 rounded-full bg-spotify-green font-semibold hover:bg-spotify-dark-green text-white "
        onClick={handleCopyNumber}
      >
        <FaRegCopy /> Copy Number
      </button>
      <button
        type="button"
        className="flex min-w-12 items-center text-sm gap-1 px-5 py-3 rounded-full bg-spotify-dark-gray border border-spotify-gray text-spotify-white font-semibold hover:bg-spotify-gray text-spotify-light-dark"
        onClick={handleCopyEmail}
      >
        <FaRegCopy />
        Copy Email
      </button>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 max-md:gap-2 px-6">
      <h1 className="text-2xl font-semibold">Luan Nguyen</h1>
      <p className="text-spotify-gray text-sm">Developer • Designer • Artist</p>
      <h4 className="text-md max-md:text-sm text-spotify-light-gray font-semibold">
        I am a rising <span className="text-spotify-white"> Junior </span>
        studying{" "}
        <span className="text-spotify-white"> Computer Science 💻</span> at
        <span className="text-spotify-white">
          {" "}
          Arizona State University 🔱{" "}
        </span>
        . Passionate about{" "}
        <span className="text-spotify-white"> Full-Stack Development </span>&
        <span className="text-spotify-white"> UI/UX Design</span>
      </h4>
    </div>
  );
}
