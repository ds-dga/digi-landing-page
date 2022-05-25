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
          <div className="text-xl">
            รายการที่พูดคุยเกี่ยวกับ Data กับผู้เชี่ยวชาญเฉพาะ
          </div>
          <div className="text-5xl leading-3 flex gap-4 md:gap-14 space-between text-center">
            <a
              className="flex flex-col items-center gap-1"
              href={
                "https://open.spotify.com/show/4fxEIyjcwctD8q1c5F4MII?si=eiH7gveJSWO6jgAYRl11mQ"
              }
            >
              <SpotifyIcon className="hover:text-sky-200 hover:text-6xl transition" />
              <span className="text-sm">Spotify</span>
            </a>
            <a
              className="flex flex-col items-center gap-1"
              href={"https://digicastbydigi.podbean.com/"}
            >
              <MicIcon className="hover:text-sky-200 hover:text-6xl transition" />
              <span className="text-sm">Podbean</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
