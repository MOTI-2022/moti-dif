//import React from "react"
import "./Split.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";



const Split = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      setData([]);
      <ScrollToTop smooth />

    };
  }, []);


  return (
    <>
      <HeadTitle />

      <ScrollToTop smooth />

      <section className='about1 top1'>
        <div className='container1'>
        {/*  <AboutCard />*/}
        </div>
        <h5>
              Make an Impact {/*<span>Story</span>*/}
        </h5>
    
      <br></br>
      <p>

      Choose an option: 
      <br></br><br></br>


      <Link to='/individual' className='primary-btn lib'>  I'm an individual
      </Link>
           
            <br></br><br/>

      <Link to='/org' className='primary-btn lib'>I'm an organization
      </Link>
           
            <br></br>
      </p>
      <br></br>

   

      </section>


      <section className='features1 top1'>

      </section>


    </>
  )
}

export default Split
