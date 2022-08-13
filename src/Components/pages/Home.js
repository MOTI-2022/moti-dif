import React from "react"
import "../../App.css"
import Hero from "../HomeSection/Hero"
import HomeAbout from "../HomeSection/HomeAbout"
import MostPopular from "../HomeSection/popular/MostPopular"
import DestinationHome from "../HomeSection/Destina/DestinationHome"
import Download from "../HomeSection/Download/Download"
import Works from "../HomeSection/Works/Works"
import Gallery from "../HomeSection/gallery/Gallery"
import Quotes from "../HomeSection/Quotes/Quotes"
import ScrollToTop from "react-scroll-to-top";
import Intro from "../HomeSection/intro/Intro"

const Home = () => {
  return (
    
    <>
      <ScrollToTop smooth />

      {/*<Hero />*/}
      <HomeAbout />
      <Works/>

      <Intro />
      <DestinationHome />
      <Quotes />

      <Download />
     {/* <Gallery />*/}
    </>
  )
}

export default Home
