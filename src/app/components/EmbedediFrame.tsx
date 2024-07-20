"use client";

import React, { useState, useEffect, useRef } from "react";

// Extend the Window interface to include `onSpotifyIframeApiReady`
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: any) => void;
  }
}

export default function EmbedediFrame() {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            width: "98%",
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
  }, []);

  return (
    <section className="bg-spotify-black rounded-2xl text-spotify-white flex items-center justify-between p-4 fixed bottom-0 w-full">
      <div className="flex-grow flex items-center justify-center w-[80%] max-md:w-[96%]">
        <div ref={playerRef} className="" style={{ background: "black" }}></div>
      </div>
    </section>
  );
}
