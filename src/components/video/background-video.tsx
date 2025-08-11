export default function BackgroundVideo() {

  // download lower-resolution video for bandwidth.
  // use https://next-video.dev/#get-started
  return (
    <video loop autoPlay muted
      className="
      fixed
      inset-y-0 
      right-0
      min-w-full
      min-h-full
      object-cover
      object-right
      -z-10
      "
    >
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}