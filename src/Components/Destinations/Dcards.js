import React from "react"
import { Link } from "react-router-dom"
//import Sdata from "./Sdata"
import SJaccess from "./SJaccess"
import Home from "./Home"
import {animateScroll as scroll} from "react-scroll"


const Cards = ({ item: { id, newPage, image, title, sidepara, desc, paraImage_one, paraImage_two } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={image} alt='Gallery Image' />

          {/*<Link to={`/singlepage/${id}`} className='blogItem-link'>*/}
         {/*<Link to={`./destinations`} >*/}
         <Link to={`./${newPage}`} onClick= {()=>(scroll.scrollToTop())} >{desc}

          {/*<Link to={`./destinations/${newPage}`} className='blogItem-link'>*/}


            <i className='fas fa-external-link-alt'></i>
          </Link>
        </div>
        <div className='title'>
          <h3><font size = "5">{title}</font> <br></br> <br></br>{desc}</h3>
        </div>
      </div>
    </>
  )
}

export default Cards
