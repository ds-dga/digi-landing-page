// icon:check2-square | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react"

export default function MicIcon(props) {
  const { fill, ...extraProps } = props
  return (
    <svg
      fill={`${fill || "currentColor"}`}
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...extraProps}
    >
      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
    </svg>
  )
}
