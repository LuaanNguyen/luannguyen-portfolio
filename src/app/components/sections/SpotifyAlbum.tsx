export default function SpotifyAlbum() {
  return (
    <div className="col-span-2 row-span-2 col-start-5 row-start-7 bg-spotify-black rounded-xl ">
      <iframe
        className="w-full h-full rounded-xl"
        src="https://open.spotify.com/embed/album/7txGsnDSqVMoRl6RQ9XyZP?utm_source=generator"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ height: "72%", width: "100%" }}
      ></iframe>
    </div>
  );
}
