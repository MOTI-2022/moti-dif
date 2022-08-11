import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"
import MostPopular from "../HomeSection/popular/MostPopular"
import Faq from '../faq/Faq';
import ScrollToTop from "react-scroll-to-top";



const Destinations = () => {
  return (
    <div>
      <HeadTitle />
      <ScrollToTop smooth />

      <h5><font size = "6">Get Help</font></h5>

      <AllItem />
      {/*<MostPopular />
      <Faq />*/}
    </div>
  )
}

export default Destinations
