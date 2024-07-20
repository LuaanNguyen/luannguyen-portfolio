"use client";

import React, { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { ReactNode } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import Link from "next/link";

export default function Navigation(): ReactNode {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  function handleMobileNav() {
    setMobileNav((prev) => !prev);
  }

  return (
    <nav className="w-screen">
      <div className="flex bg-spotify-light-dark justify-between max-md:mx-2 max-md:mt-4  max-md:px-5 max-md:py-3 mx-32 mt-10 p-2 rounded-full items-center">
        {/*Mobile Mode*/}

        {mobileNav ? (
          <FaTimes className="text-4xl sm:hidden" onClick={handleMobileNav} />
        ) : (
          <GiHamburgerMenu
            className="text-4xl sm:hidden"
            onClick={handleMobileNav}
          />
        )}

        <Link href="/" className="flex gap-2 text-3xl font-bold items-center">
          <FaCode className="text-spotify-green w-[70px]" />
          <h1 className="max-lg:hidden">Luan Nguyen</h1>
        </Link>

        {/*Hidden on Mobile*/}
        <div className="flex flex-row gap-5 items-center max-md:hidden">
          <SocialLinks />
          <PiLineVerticalThin className="text-spotify-gray text-4xl" />
          <Button name="Let's Talk" />
        </div>
      </div>
    </nav>
  );
}

interface ButtonProps {
  name: string;
}

function Button({ name }: ButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center text-xl gap-1 px-4 py-3 rounded-full bg-spotify-green font-bold hover:bg-spotify-dark-green"
    >
      {name}
      <TiArrowForwardOutline />
    </button>
  );
}

function SocialLinks() {
  return (
    <>
      {socialMedias.map((social) => (
        <Link
          href={social.url}
          className="text-3xl hover:text-spotify-green"
          key={social.title}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </>
  );
}

type socialMediasProps = {
  title: string;
  url: string;
  icon: ReactNode;
}[];

const socialMedias: socialMediasProps = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/luannuen/",
    icon: <FaInstagram />,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/luanthiennguyen/",
    icon: <FaLinkedin />,
  },
  {
    title: "Github",
    url: "https://github.com/LuaanNguyen",
    icon: <FaGithub />,
  },
];
