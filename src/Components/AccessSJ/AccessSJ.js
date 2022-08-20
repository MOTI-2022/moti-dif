//import React from "react"
import "./AccessSJ.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import React, { useEffect, useState } from "react";


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

      <Link to='/resources' className="primary-btn">
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

      <h5>
      {t("sj_access.title")} 

      </h5>
 
      <div className="plan">

 
      <h6><font size="4"> {t("sj_access.pg1")}     
      
      <br></br><br></br>

      Find your nearest San José Public Library: 
      <a href='https://storelocator.site/LDAAwP' target='_blank' className='info-btn'>
       here
      </a>
      </font>
      </h6></div>
   

      <h5><u><b><font size="5"> {t("sj_access.devices.title")} 
      
      
      </font></b></u></h5>
  
     

      <div className='container1'>
 
        <Devices />
        <div className="plan">

        </div>

        <Hotspot />



        {/*  <AboutCard />*/}
        </div>
      
      <section className='about1 top1'>

  

    
      <br></br>


   

      </section>
      <MostPopular />


      


    </>
  )
}

export default AccessSJ
