import MicIcon from "../icon/Mic"
import SpotifyIcon from "../icon/Spotify"
import Iframe from "./iframe"

export default function PodcastSection() {
  return (
    <section className="my-10 py-10 min-h-20 bg-opacity-95 bg-sky-500 p-5 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <Iframe
          src="https://open.spotify.com/embed/episode/0pKqTD63HgJoswMQB5zQfE?utm_source=generator"
          width={"100%"}
          height="232"
        />
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-10">
          <div className="text-xl text-center">
            ติดตามสาระน่ารู้ของ data และ tech trend ใหม่ๆ
            <br />
            โดยผู้เชี่ยวชาญได้ที่รายการ DIGI Cast 
            <br />
            ผ่านช่องทาง Podbean และ Spotify
          </div>
          <div className="text-5xl leading-3 flex gap-4 md:gap-14 space-between text-center">
            <a
              className="flex flex-col items-center gap-1"
              href={"https://digicastbydigi.podbean.com/"}
              target="_blank"
            >
              <MicIcon className="hover:text-green-400 hover:text-6xl transition-all duration-100" />
              <span className="text-sm">Podbean</span>
            </a>
            <a
              className="flex flex-col items-center gap-1"
              href={
                "https://open.spotify.com/show/4fxEIyjcwctD8q1c5F4MII?si=eiH7gveJSWO6jgAYRl11mQ"
              }
              target="_blank"
            >
              <SpotifyIcon className="hover:text-green-400 hover:text-6xl transition-all duration-100" />
              <span className="text-sm">Spotify</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
