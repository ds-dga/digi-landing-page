import YoutubeIcon from "../icon/Youtube"
import Iframe from "./iframe"

export default function YoutubeSection() {
  return (
    <section className="py-5 min-h-20 bg-transparent p-5 text-sky-500">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-10">
          <div className="text-xl text-center">
            <div className="mb-2 font-bold">
              "เสริมความรู้
              <br />
              สร้างทักษะ
              <br />
              ต่อยอดความสามารถ
              <br />
              ด้านดิจิทัล"
            </div>
            <br />
            ไปกับ Youtube:{" "}
            <span className="text-lg text-violet-600 font-bold">DIGI Channel</span>
          </div>
          <div className="text-5xl leading-3 flex gap-4 space-between text-center">
            <a
              href={
                "https://www.youtube.com/channel/UCuXfHZzQRPJNW9-ntpdpOXw/featured"
              }
              className="flex flex-col items-center gap-1"
              target="_blank"
            >
              <YoutubeIcon className="hover:text-red-500 hover:text-6xl transition-all duration-100" />
              <span className="text-sm w-full text-center">YouTube</span>
            </a>
          </div>
        </div>
        <Iframe
          src="https://www.youtube-nocookie.com/embed/a6_HAmrnTsg"
          width={"100%"}
          height="315"
        />
      </div>
    </section>
  )
}

// https://www.youtube.com/watch?v=HcQWavBle5c
// <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HcQWavBle5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{
  /* <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a6_HAmrnTsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
