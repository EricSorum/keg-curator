import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="flex space-between gap-5">
        <Link href="https://github.com/EricSorum/keg-curator" title="Go to GitHub" className="flex gap-2">

          View on GitHub <img src="/github.svg" alt="GitHub logo" className="h-5"/>
        </Link>
        <Link href="https://ericsorum.com" title="Go to portfolio site" className="flex gap-2">
        Go to Portfolio site<img src="/octagon.svg" alt="GitHub logo" className="h-5"/>
        </Link>
      </div>
      <div className="m-5 text-center w-full">
          &copy; Copyright 2025 Eric Sorum
      </div>
    </footer>
  )
}