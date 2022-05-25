export default function Iframe({ src, height, width }) {
  return (
    <div className="flex-1 w-10/12 rounded-xl overflow-hidden">
      <iframe src={src} height={height} width={width} />
    </div>
  )
}
