export default function BackgroundVideo() {
  return (
    <video preload="none" loop autoPlay
      className="
      fixed
      right-[0]
      bottom-[0]
      min-w-full
      min-h-full
      object-cover
      -z-10
      "
    >
      <source src="/background.mp4" type="video/mp4" />
      {/* <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      /> */}
      Your browser does not support the video tag.
    </video>
  )
}