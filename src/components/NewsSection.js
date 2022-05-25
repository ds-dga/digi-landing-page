import FacebookIcon from "../icon/Facebook"

export default function NewsSection() {
  return (
    <section className="my-10 py-10 min-h-20 bg-opacity-95 bg-sky-500 p-5 text-white">
      <div className="flex flex-row justify-center gap-10">
        <div className="h-60 w-3/4 bg-white rounded-2xl flex-1">รูปอะไรไม่รุ้</div>
        <div className="flex-1 flex flex-col justify-center items-center gap-10">
          <div className="text-xl">
            ติดตามข่าวสาร Data และการประกวด Data Content
          </div>
          <div className="text-5xl leading-3 flex gap-4 space-between text-center">
            <a href={"https://www.youtube-nocookie.com/embed/HcQWavBle5c"}>
              <FacebookIcon className="hover:text-sky-200 hover:text-6xl transition" />
              {/* <span className="text-sm text-center">Facebook</span> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
