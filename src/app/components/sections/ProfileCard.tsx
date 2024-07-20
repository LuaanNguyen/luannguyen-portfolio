import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import SocialLinks from "../SocialLinks";
import { IoLocationOutline } from "react-icons/io5";

export default function ProfileCard() {
  return (
    <div className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl">
      <div className="flex flex-col">
        <Image
          src="/Luan.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
          objectFit="none" // change to suit your needs
          className="p-6 w-full h-full rounded-[40px] "
        ></Image>
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
  return (
    <div className="flex px-6 mt-4 gap-4">
      <button
        type="button"
        className="flex items-center text-xl gap-1 px-4 py-3 rounded-full bg-spotify-green font-bold hover:bg-spotify-dark-green text-spotify-light-dark "
      >
        Book a Call
      </button>
      <button
        type="button"
        className="flex items-center text-xl gap-1 px-4 py-3 rounded-full bg-spotify-green font-bold hover:bg-spotify-dark-green text-spotify-light-dark  "
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
      <h1 className="text-3xl font-semibold">Luan Thien Nguyen 🍀</h1>
      <p className="text-spotify-gray">Developer • Designer • Artist</p>
      <h4 className="text-xl text-spotify-light-gray font-semibold">
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
