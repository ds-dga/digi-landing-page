import GitHubIcon from "../icon/GitHub"

export default function Footer() {
  return (
    <div className="flex flex-row-reverse my-2 mx-5 text-gray-400">
      <span className="cursor-pointer hover:text-sky-400 text-xl">
        <a
          href="https://github.com/ds-dga/digi-landing-page"
          alt="digi-landing-page-sourcecode"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      </span>
    </div>
  )
}
