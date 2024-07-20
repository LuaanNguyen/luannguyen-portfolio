"use client";

import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import SocialLinks from "../SocialLinks";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";

export default function ProfileCard() {
  return (
    <div className="relative col-span-2 row-span-6 bg-spotify-black rounded-xl py-10">
      <div className="flex flex-col gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/Luan.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
            objectFit="none" // change to suit your needs
            className=" rounded-[25px] "
          ></Image>
        </BackgroundGradient>

        <PersonalStatement />
        <Booking />
        {/* <Location /> */}
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="absolute bottom-0 right-0 text-lg px-4 py-2 opacity-50">
      <div className="flex items-center gap-1 font-semibold">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Tempe, AZ
      </div>
    </div>
  );
}

function Booking() {
  const email = "luanthiennguyen2003@gmail.com"; // Replace with the email you want to copy

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
  return (
    <div className="flex px-6 mt-4 gap-4">
      <button
        type="button"
        className="flex min-w-12 items-center text-md gap-1 px-5 py-3 rounded-full bg-spotify-green font-bold hover:bg-spotify-dark-green text-spotify-light-dark "
      >
        Book a Call
      </button>
      <button
        type="button"
        className="flex min-w-12 items-center text-md gap-1 px-5 py-3 rounded-full bg-spotify-dark-gray border border-gray-700 text-spotify-light-gray font-bold hover:bg-spotify-gray text-spotify-light-dark"
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
    <div className="flex flex-col gap-3 px-6">
      <h1 className="text-2xl font-semibold">Luan Thien Nguyen 🍀</h1>
      <p className="text-spotify-gray text-sm">Developer • Designer • Artist</p>
      <h4 className="text-md text-spotify-light-gray font-semibold">
        I am a rising <span className="text-spotify-white"> Junior </span>
        studying{" "}
        <span className="text-spotify-white"> Computer Science 💻</span> at
        <span className="text-spotify-white">
          {" "}
          Arizona State University 🔱{" "}
        </span>
        . Passionate about{" "}
        <span className="text-spotify-white">
          {" "}
          Full-Stack Web-App Development{" "}
        </span>
        &<span className="text-spotify-white"> UI/UX Design</span>
      </h4>
    </div>
  );
}
