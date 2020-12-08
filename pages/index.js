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
    const projOffset =  document.getElementById("projects").getBoundingClientRect()['y'] - delta
    const aboutMeOffset = document.getElementById("aboutme").getBoundingClientRect()['y'] - delta
    if (projOffset > 0) {
      if (this.state.currPage !== "home") {
        this.setState({
          currPage: "home"
        })
      }
    } else if (aboutMeOffset > 0) {
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
          <title>My Name</title>
        </Head>
        <div className="w-1/12 fixed right-3 top-mid"> 
          <NavItems current={this.state.currPage} scroll={this.scroll}/>
        </div>
        <div className="container mx-auto h-10v pt-12 flex flex-row justify-between" id="top">
            <h1 className="text-5xl font-bold font-nunito text-left">My Name</h1>
            <div className="flex flex-row space-x-4">
              <LinkedIn/>
              <Email/>
            </div>
        </div>
        <div className="container mx-auto w-10/12 pt-12 h-83v">
          <div className="table h-70v mx-64">
            <div className="table-cell align-middle">
              <p className="font-mont text-xl"><span className="text-purple-800 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
        <div className="h-7v">
          <NavArrow scroll={this.scroll} nextElement="projects" down={true}/>
        </div>
        <div className="container mx-auto h-10v pt-12" id="projects">
            <h1 className="text-5xl font-bold font-nunito text-left">Projects</h1>
        </div>
        <div className="container mx-auto w-10/12 pt-12 h-83v flex flex-col justify-items-center">
          <div className="container mx-auto mt-12 w-4/5 h-3/4">
            <ProjectGrid />
          </div>
        </div>
        <div className="h-7v">
          <NavArrow scroll={this.scroll} nextElement="aboutme" down={true}/>
        </div>
        <div className="container mx-auto h-10v pt-12" id="aboutme">
            <h1 className="text-5xl font-bold font-nunito text-left">About Me</h1>
        </div>
        <div className="container mx-auto w-10/12 pt-12 h-83v table">
          <div className="container mx-auto mt-12 p-24 w-4/5 h-3/4 table-cell align-middle">
            <div className="flex flex-row justify-items-start w-10/12">
              <img className="rounded-full w-64 h-64 inline-block pr-5" src="/images/profile-blank.jpg"></img>
              <p className="mt-12 font-mont text-lg"><span className="text-purple-800 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
