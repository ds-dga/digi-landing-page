import GitHubIcon from "../icon/GitHub"

export default function Footer() {
  return (
    <div className="flex flex-row-reverse my-2 mx-5 text-gray-400 gap-4">
      <span className="cursor-pointer hover:text-sky-400 text-xl">
        <a
          href="https://github.com/ds-dga/digi-landing-page"
          alt="digi-landing-page-sourcecode"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </span>
      <span className="text-xs text-sky-400">
        สำนักงานพัฒนารัฐบาลดิจิทัล (สพร.) | (+66) 02612 6060 | contact@dga.or.th
      </span>
    </div>
  )
}
