import FacebookIcon from "../icon/Facebook"
import Carousel from "./carousel"

export default function NewsSection() {
  return (
    <section className="my-10 py-10 min-h-20 bg-opacity-95 bg-sky-500 p-5 text-white h-fit">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
        <div className="w-3/4 rounded-2xl flex-1 rounded-xl overflow-hidden">
          <Carousel />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4 md:gap-10">
          <div className="text-xl text-center">
            ติดตามข่าวสารสาระความรู้ Data insight, Update service
            <br />
            และกิจกรรมเสริมทักษะด้านข้อมูลได้ที่ Facebook: <span className="text-lime-300 font-bold">DIGI</span>
          </div>
          <div className="text-5xl leading-3 flex gap-4 space-between text-center">
            <a
              href={"https://www.facebook.com/DIGIInstituteThailand"}
              target="_blank"
            >
              <FacebookIcon className="rounded-full bg-sky-500 hover:bg-white hover:text-blue-500 hover:text-6xl transition-all duration-100" />
              {/* <span className="text-sm text-center">Facebook</span> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
