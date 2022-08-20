//import React from "react"
import "./Broadband.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import React, { useEffect, useState } from "react";

import AllBlog from "../Blog/AllBlog"

import AllWifi from "../Wifi/AllWifi";

import CourseInfo from "../CourseInfo/CourseInfo"
import Plans from "../Plans/Plans"
import { useTranslation } from "react-i18next";

const Broadband = () => {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      setData([]);
    };
  }, []);


  return (
    <>
      {/*<HeadTitle />*/}
      <br></br>

      <Link to='/destinations' className="primary-btn">
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
            <br></br>
      <h5>
      {t("broadband.title")} {/*<span>Story</span>*/}

            <br></br>
              <font size="5"> {t("broadband.tagline")} </font>
            <br></br>



      </h5>
      <div className="plan">
      <u><font size="4"> {t("broadband.subtitle")} </font></u>
              <br></br>

      <font size="3">
        {t("broadband.para")} 
      </font></div>
      <br></br>
      <br></br>
  
      {/*<MostPopular />

      <AdvSkills />*/}

      <div className='container1'>
        <Plans />


        {/*  <AboutCard />*/}
      </div>
      
      <section className='about1 top1'>



    
      <br></br>


      </section>


    </>
  )
}

export default Broadband
