import styled from "styled-components"
import Footer from "./components/footer"
import MissionSection from "./components/MissionSection"
import MovingBackground from "./components/moving-background"
import Navigator from "./components/nav"
import NewsSection from "./components/NewsSection"
import PodcastSection from "./components/PodcastSection"
import YoutubeSection from "./components/YoutubeSection"
import digiLongLogo from "./digi-long-logo.png"

function App() {
  return (
    <Body>
      <Navigator />
      <MovingBackground />
      <OverTheTop className="container mx-auto my-10 sm:my-20 lg:my-28">
        <div className="text-center text-gray-800">
          <div className="rounded-lg shadow-lg px-6 py-12 md:py-14 md:px-12 bg-opacity-70 bg-white flex flex-col items-center">
            <img
              src={digiLongLogo}
              className={`w-full md:w-10/12 lg:w-8/12 mb-5 align-center`}
              alt={"DIGI Logo"}
            />
            <h1 className="text-xl md:text-3xl xl:text-4xl tracking-tight">
              Data Community พื้นที่ความรู้ เพิ่มทักษะ <br />
              <span className="text-sky-600 text-lg md:text-2xl xl:text-3xl">
                การวิเคราะห์ข้อมูล การใช้ประโยชน์จากข้อมูล
              </span>
            </h1>
          </div>
        </div>
      </OverTheTop>

      <MissionSection />

      <NewsSection />

      <YoutubeSection />

      <PodcastSection />

      <Footer />
    </Body>
  )
}

export default App

// style="margin-top: 180px;background-color: hsla(0, 0%, 100%, 0.8);backdrop-filter: saturate(200%) blur(25px);"
const OverTheTop = styled.div`
  // margin-top: 80px;
  backdrop-filter: saturate(200%) blur(25px);
`

const Body = styled.div`
  font-family: "Noto Sans Thai", sans-serif;
`
