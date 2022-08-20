//import React from "react"
import "./Courses.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import AllBlog from "../Blog/AllBlog"

import AllWifi from "../Wifi/AllWifi";

import CourseInfo from "../CourseInfo/CourseInfo"

const Courses = () => {
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
        {t("digital_literacy.title")}{/*<span>Story</span>*/}

      </h5>
      <div className="plan">

        <h6><font size="4"> {t("digital_literacy.para")}  </font></h6>
      </div>
      <h5>
        <font size="4"> {t("digital_literacy.tagline")} </font>
      </h5>

      {/*<MostPopular />

      <AdvSkills />*/}

      <div className='container1'>
        <CourseInfo />


        {/*  <AboutCard />*/}
      </div>
      
      <section className='about1 top1'>

      <br></br>

      </section>


    </>
  )
}

export default Courses
