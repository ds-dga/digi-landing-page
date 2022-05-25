import { useEffect, useRef, useState } from "react"
import "tw-elements"
import img1 from "./images/S__12681229.jpg"
import img2 from "./images/S__12681231.jpg"
import img3 from "./images/S__12681232.jpg"
import img4 from "./images/S__12681233.jpg"
import img5 from "./images/S__12681234.jpg"
import img6 from "./images/S__12681235.jpg"
import img7 from "./images/S__12681236.jpg"

const GALLERY = [
  { src: img1, title: "DIGI - Popular dashboard" },
  { src: img2, title: "DIGI - Metaverse" },
  { src: img3, title: "DIGI - Data camp" },
  { src: img4, title: "DIGI - open data" },
  { src: img5, title: "DIGI - open data" },
  { src: img6, title: "DIGI" },
  { src: img7, title: "DIGI - open data quality" },
]

export default function Carousel() {
  const [ActiveInd, SetActiveInd] = useState(0)
  const timer = useRef(0)

  useEffect(() => {
    // need to force running the carousel
    clearTimeout(timer)
    setTimeout(() => {
      SetActiveInd(ActiveInd === GALLERY.length - 1 ? 0 : ActiveInd + 1)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [ActiveInd])

  return (
    <div
      id="digiCarouselBox"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        {GALLERY.map((ele, ind) => (
          <div
            key={`g-${ind}`}
            className={`${
              ind === ActiveInd && "active"
            } carousel-item relative float-left w-full`}
          >
            <img src={ele.src} className="block w-full" alt={ele.title} />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#digiCarouselBox"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#digiCarouselBox"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
