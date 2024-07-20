"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Footer() {
  const playerRef = useRef<HTMLDivElement>(null);
  const [playerWidth, setPlayerWidth] = useState(window.innerWidth * 0.9);

  useEffect(() => {
    const handleResize = () => {
      setPlayerWidth(window.innerWidth * 0.9);
    };

    window.addEventListener("resize", handleResize);

    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed-podcast/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (playerRef.current) {
        window.onSpotifyIframeApiReady = (IFrameAPI: any) => {
          const element = playerRef.current;
          const options = {
            uri: "spotify:track:2p8IUWQDrpjuFltbdgLOag",
            width: playerWidth,
            height: "90",
            theme: "black",
          };
          IFrameAPI.createController(
            element,
            options,
            (EmbedController: any) => {
              // EmbedController is the Spotify embed controller
            }
          );
        };
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [playerWidth, setPlayerWidth]);

  return (
    <footer className="bg-spotify-black text-spotify-white flex items-center justify-between p-4 fixed bottom-0 w-full">
      <div className="flex-grow flex items-center justify-center w-[80%] max-md:w-[96%]">
        <div ref={playerRef} className="" style={{ background: "black" }}></div>
      </div>
    </footer>
  );
}
