import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'


export default function Home() {
  return (
    <div className="container mx-auto pt-8">
      <h1 className="text-2xl font-bold text-center">Isaac Hilton-VanOsdall</h1>
      <h3 className="text-xl font-bold">Some projects I've worked on recently:</h3>
      <Link href="/projects/development">
        <a className="text-md text-blue-500 cursor-auto block">React Development</a>
      </Link>
      <Link href="/projects/iterative-design">
        <a className="text-md text-blue-500 cursor-auto block">Iterative Design: Hellosaurus</a>
      </Link>
      <Link href="/projects/responsive-redesign">
        <a className="text-md text-blue-500 cursor-auto block">Responsive Redesign: Ormsbys</a>
      </Link>
      <Link href="/projects/ab-testing">
        <a className="text-md text-blue-500 cursor-auto block">A/B Testing</a>
      </Link>
    </div>
  )
}
