//import React from "react"
import "./AccessSJ.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import AdvSkills from "../HomeSection/advancedSkills/AdvSkills";
import React, { useEffect, useState } from "react";

import AllBlog from "../Blog/AllBlog"

import AllWifi from "../Wifi/AllWifi";
import AllReports from "../Reports/AllReports";

import CourseInfo from "../CourseInfo/CourseInfo"
import Devices from "../Devices/CourseInfo";
import Hotspot from "../Hotspot/Hotspot";

import { useTranslation } from "react-i18next";

const AccessSJ = () => {
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

      <h5>
      {t("sj_access.title")} {/*<span>Story</span>*/}

              {/*<br></br>
              <font size="5">Find an affordable home internet plan that works for you.</font>
              <br></br>*/}


      </h5>

   
 
      <div className="plan">

     {/* <u><b><font size="5">DEVICES</font></b></u>
              <br></br>*/}

 
      <h6><font size="4"> {t("sj_access.pg1")}     
      
      <br></br><br></br>

Find your nearest San José Public Library: 
      <a href='https://storelocator.site/LDAAwP' target='_blank' className='info-btn'>
       here
      </a>
       </font></h6></div>
   

      <h5><u><b><font size="5"> {t("sj_access.devices.title")} 
      
      
      </font></b></u></h5>
  
     

      <div className='container1'>
 
        <Devices />
        <div className="plan">

       {/* <u><b><font size="5">WIFI HOTSPOT</font></b></u>
              <br></br>*/}
        </div>

        <Hotspot />



        {/*  <AboutCard />*/}
        </div>
      
      <section className='about1 top1'>

  

    
      <br></br>


   

      </section>
      <MostPopular />


      {/*<section className='features2 top1'>

   

      <Link to='/destinations' className='primary-btn lib'>
            <i className='fas fa-long-arrow-alt-left'></i> Back to Resources
            </Link>
      <p>
        Basic Digital Skills
      </p>
      <br></br>
        

        <div className='container1 aboutCard1 flex_space1'>


            
            <p>
   

           <br></br>           <br></br>
          <font size = "5">

        Question?
      <br></br>
        Answer
        <br></br>        <br></br>


        Question?      <br></br>

        Answer
        <br></br>        <br></br>


        Question?      <br></br>

        Answer
        <br></br>        <br></br> </font></p>
      </div>

        <p>
        About Devices and the Internet
      </p>
      <br></br>

      <div className='container1 aboutCard1 flex_space1'>


                    
        <p>


        <br></br>           <br></br>
        <font size = "5">

        Question?
        <br></br>
        Answer
        <br></br>        <br></br>


        Question?      <br></br>

        Answer
        <br></br>        <br></br>


        Question?      <br></br>

        Answer
        <br></br>        <br></br> </font></p>
        </div>

        
        

      </section>*/}


    </>
  )
}

export default AccessSJ
