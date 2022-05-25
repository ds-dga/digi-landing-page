export default function MissionSection() {
  return (
    <section className="my-10 py-10 min-h-20 bg-opacity-80 bg-white text-sky-400">
      <div className="flex flex-col md:flex-row space-between justify-center items-center">
        <div className="flex-1 text-center text-sky-600 py-10">
          <div className="font-bold text-2xl">Our Missions</div>
          <div className="text-xs">
            ขับเคลื่อนข้อมูลให้เกิดนวัตกรรม
            <br />
            เพื่อการพัฒนารัฐบาลติจิทัล
          </div>
          <div className="text-xl font-bold mt-3">ด้วยภารกิจ 4D</div>
        </div>
        <div className="flex-auto px-10 grid grid-cols-2 gap-2 md:gap-6">
          <div className="rounded bg-sky-500 shadow-lg text-white py-4 px-4 text-center hover:bg-sky-600 transition">
            <div className="text-lg font-bold">Data Governance</div>
            <div className="text-md font-light">ธรรมาภิบาลข้อมูล</div>
          </div>
          <div className="rounded bg-sky-500 shadow-lg text-white py-4 px-4 text-center hover:bg-sky-600 transition">
            <div className="text-lg font-bold">Data Skill</div>
            <div className="text-md font-light">พัฒนาทักษะด้านข้อมูล</div>
          </div>
          <div className="rounded bg-sky-500 shadow-lg text-white py-4 px-4 text-center hover:bg-sky-600 transition">
            <div className="text-lg font-bold">Data Community</div>
            <div className="text-md font-light">
              สร้างภาคีเครือข่ายด้านข้อมูล
            </div>
          </div>
          <div className="rounded bg-sky-500 shadow-lg text-white py-4 px-4 text-center hover:bg-sky-600 transition">
            <div className="text-lg font-bold">Data Innovation</div>
            <div className="text-md font-light">
              ขับเคลื่อนนวัตกรรมจากข้อมูล
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
