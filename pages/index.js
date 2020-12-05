import React from 'react'

import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'

import NavArrow from '../components/icons/NavArrow'


export default class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  scroll = (scrollTo) => {
      const div = document.getElementById(scrollTo)
      div.scrollIntoView({ block: 'end',  behavior: 'smooth' })
  }

  render() {
    return (
      <>
        <Head>
          <title>Isaac Hilton-VanOsdall</title>
        </Head>
        <div className="container mx-auto pt-12 h-screen flex flex-col justify-between" id="top">
          <h1 className="text-5xl font-bold font-nunito text-left">Isaac Hilton-VanOsdall</h1>
          <NavArrow scroll={this.scroll} nextElement="projects" down={true}/>
        </div>
        <div className="container mx-auto pt-12 h-screen flex flex-col justify-between" id="projects">
          <h1 className="text-5xl font-bold font-nunito text-left">Projects</h1>
          <NavArrow scroll={this.scroll} nextElement="aboutme" down={true}/>
        </div>
        <div className="container mx-auto pt-12 h-screen flex flex-col justify-between" id="aboutme">
          <h1 className="text-5xl font-bold font-nunito text-left">About Me</h1>
          <NavArrow scroll={this.scroll} nextElement="top" down={false}/>
        </div>
      </>
    )
  }
}
