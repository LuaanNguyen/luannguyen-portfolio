"use client";

import React, { useState } from "react";
import NavButton from "./NavButton";
import { FaCode } from "react-icons/fa6";
import { ReactNode } from "react";
import { PiLineVerticalThin } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";

export default function Navigation(): ReactNode {
  const [mobile, setMobile] = useState<boolean>(false);

  function handleMobile() {
    setMobile((prev) => !prev);
  }

  return (
    <nav className="w-screen">
      <div
        className={`flex flex-col bg-spotify-light-dark max-md:mx-2 max-md:mt-4 mx-32 mt-10 p-2 rounded-full
         items-center`}
      >
        <section className="flex flex-row w-full justify-between items-center max-md:px-4 max-md:py-1">
          {/*Mobile Mode*/}
          {mobile ? (
            <FaTimes className="text-4xl sm:hidden" onClick={handleMobile} />
          ) : (
            <GiHamburgerMenu
              className="text-4xl sm:hidden"
              onClick={handleMobile}
            />
          )}

          <Link href="/" className="flex gap-2 text-3xl font-bold items-center">
            <FaCode className="text-spotify-green w-[70px]" />
            <h1 className="max-lg:hidden">Luan Nguyen</h1>
          </Link>

          {/*Hidden on Mobile*/}
          <section className="flex flex-row gap-5 items-center max-sm:hidden">
            <SocialLinks />
            <PiLineVerticalThin className="text-spotify-gray text-4xl" />
            <NavButton name="Let's Talk" />
          </section>
        </section>
        {mobile && <MobileNav />}
      </div>
    </nav>
  );
}
