import "tw-elements"
import img1 from "./images/S__12681229.jpg"
import img2 from "./images/S__12681231.jpg"
import img3 from "./images/S__12681232.jpg"
import img4 from "./images/S__12681233.jpg"
import img5 from "./images/S__12681234.jpg"
import img6 from "./images/S__12681235.jpg"
import img7 from "./images/S__12681236.jpg"

const GALLERY = [
  { src: img1, title: "DIGI - 1" },
  { src: img2, title: "DIGI - 2" },
  { src: img3, title: "DIGI - 3" },
  { src: img4, title: "DIGI - 4" },
  { src: img5, title: "DIGI - 5" },
  { src: img6, title: "DIGI - 6" },
  { src: img7, title: "DIGI - 7" },
]

export default function Carousel() {
  return (
    <div
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        {GALLERY.map((ele, ind) => (
          <div
            key={`g-${ind}`}
            className={`${
              ind === 0 && "active"
            } carousel-item float-left w-full`}
          >
            <img src={ele.src} className="block w-full" alt={ele.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
