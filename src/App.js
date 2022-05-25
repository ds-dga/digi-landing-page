import styled from "styled-components"
import MovingBackground from "./components/moving-background"
import Navigator from "./components/nav"
import digiLongLogo from "./digi-long-logo.png"

function App() {
  return (
    <Body>
      <Navigator />
      <MovingBackground />
      <OverTheTop className="container mx-auto px-6 md:px-12 xl:px-32 mt-10 sm:mt-20 lg:mt-28">
        <div className="text-center text-gray-800">
          <div className="rounded-lg shadow-lg px-6 py-12 md:py-14 md:px-12 bg-opacity-80 bg-white flex flex-col items-center">
            <img
              src={digiLongLogo}
              className={`w-full md:w-10/12 lg:w-8/12 mb-5 align-center`}
              alt={"DIGI Logo"}
            />
            <h1 className="text-xl md:text-3xl xl:text-4xl tracking-tight">
              Data Community พื้นที่ความรู้ เพิ่มทักษะ <br />
              <span className="text-blue-600 text-lg md:text-2xl xl:text-3xl">
                การวิเคราะห์ข้อมูล การใช้ประโยชน์จากข้อมูล
              </span>
            </h1>
          </div>
        </div>
      </OverTheTop>
      <section className="mt-20 mb-24 min-h-20 bg-opacity-95 bg-sky-500 p-5 text-white">
        Hey
        <br />
        Hey
        <br />
        Hey
        <br />
        Hey
        <br />
        Hey
        <br />
        Hey
        <br />
        Hey
        <br />
      </section>

      <section className="my-10 mb-24 min-h-20 bg-transparent p-5 text-sky-600">
        You
        <br />
        You
        <br />
        You
        <br />
        You
        <br />
        You
        <br />
        You
        <br />
        You
        <br />
      </section>

      <section className="my-10 mb-24 min-h-20 bg-opacity-95 bg-sky-500 p-5 text-white">
        I<br />
        figure
        <br />
        it's
        <br />
        true,
        <br />
        true,
        <br />
        yeah,
        <br />
        yeah You
        <br />
        know
        <br />
        what
        <br />
        you
        <br />
        do
        <br />
        to
        <br />
        me,
        <br />
        it's
        <br />
        crazy I'm
        <br />
        someone
        <br />
        else's baby
        <br />
      </section>
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
