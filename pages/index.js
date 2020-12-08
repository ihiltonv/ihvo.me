import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

import NavArrow from '../components/icons/NavArrow'
import LinkedIn from '../components/icons/LinkedIn'
import Email from '../components/icons/Email'
import NavItems from '../components/NavItems'
import ProjectGrid from '../components/ProjectGrid'


export default class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currPage: "home"
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrollListen);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.scrollListen);
  }

  scroll = (scrollTo) => {
      const div = document.getElementById(scrollTo)
      div.scrollIntoView({ block: 'start',  behavior: 'smooth' })
  }

  scrollListen = () => {
    const delta = 5
    const top = document.getElementById("top").getBoundingClientRect()['y'] - delta
    const projOffset =  document.getElementById("projects").getBoundingClientRect()['y'] - delta
    const aboutMeOffset = document.getElementById("aboutme").getBoundingClientRect()['y'] - delta
    if (Math.abs(top) < Math.abs(projOffset)) {
      if (this.state.currPage !== "home") {
        this.setState({
          currPage: "home"
        })
      }
    } else if (Math.abs(projOffset) < Math.abs(aboutMeOffset)) {
      if (this.state.currPage !== "projects") {
        this.setState({
          currPage: "projects"
        })
      }
    } else {
      if (this.state.currPage !== "aboutme") {
        this.setState({
          currPage: "aboutme"
        })
      }
    }

  }

  render() {
    return (
      <>
        <Head>
          <title>Isaac Hilton-VanOsdall</title>
        </Head>
        <div className="w-1/12 hidden md:block fixed right-3 top-mid"> 
          <NavItems current={this.state.currPage} scroll={this.scroll}/>
        </div>
        <div className="container mx-auto h-10v pt-12 flex flex-row justify-between" id="top">
            <h1 className="text-5xl font-bold font-nunito text-left">Isaac Hilton-VanOsdall</h1>
            <div className="flex flex-row space-x-4">
              <LinkedIn/>
              <Email/>
            </div>
        </div>
        <div className="container mx-auto w-10/12 pt-12 h-83v">
          <div className="table h-70v sm:mx-12 lg:mx-64">
            <div className="table-cell align-middle">
              <p className="font-mont text-xl"><span className="text-purple-800 font-bold">Hi, I'm Isaac.</span> I study computer science at Brown University with a focus on AI and Software Engineering. Born and raised in Barre, VT.</p>
            </div>
          </div>
        </div>
        <div className="h-7v">
          <NavArrow scroll={this.scroll} nextElement="projects" down={true}/>
        </div>
        <div className="container mx-auto h-10v pt-12" id="projects">
            <h1 className="text-5xl font-bold font-nunito text-left">Projects</h1>
        </div>
        <div className="container mx-auto w-10/12 pt-12 h-auto lg:h-83v flex flex-col justify-items-center">
          <div className="container mx-auto mt-12 sm:w-4/5 h-3/4">
            <ProjectGrid />
          </div>
        </div>
        <div className="hidden lg:block h-7v">
          <NavArrow scroll={this.scroll} nextElement="aboutme" down={true}/>
        </div>
        <div className="container mx-auto h-10v pt-12" id="aboutme">
            <h1 className="text-5xl font-bold font-nunito text-left">About Me</h1>
        </div>
        <div className="container mx-auto sm:w-10/12 pt-12 h-auto lg:h-83v table">
          <div className="container mx-auto mt-12 p-24 sm:w-4/5 h-3/4 table-cell align-middle">
            <div className="flex flex-col lg:flex-row justify-items-start w-full sm:w-10/12">
              <img className="rounded-full w-64 h-64 block mx-auto lg:inline-block sm:mr-12" src="/images/ihiltonv.jpg"></img>
              <div className="space-y-2">
                <p className="mt-12 font-mont text-lg"><span className="text-purple-800 font-bold">I'm a current senior at Brown University studying Computer Science </span> with a focus on AI and Software Engineering. My interests include deep learning, web design and teaching computer science. Currently searching for a job in the Seattle area.</p>
                <Link href="/Resume.pdf">
                  <a className="block text-purple-800 font-bold font-mont cursor-pointer underline">My Resume</a>
                </Link>
                <a className="block text-purple-800 font-bold font-mont cursor-pointer underline" href="https://github.com/ihiltonv">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-7v">
          <NavArrow scroll={this.scroll} nextElement="top" down={false}/>
        </div>
      </>
    )
  }
}
