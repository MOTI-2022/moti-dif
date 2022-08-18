//import React from "react"
import "../Blog/BlogHome.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";
import data from "../Blog/BlogData";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import EmptyFile from "../../Common/Empty/EmptyFile";
import AllWifi from "../Wifi/AllWifi";
import { useTranslation } from "react-i18next";

const Resource2 = () => {
  {/*const [data, setData] = useState([]);*/}
  // const [item, setQuestions] = useState(data);
  const { t } = useTranslation();


  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      {/*setData([]);*/}
    };
  }, []);

  return (
    <>
      <HeadTitle />
 
      <section className='single-page top'>
          <div className='container'>
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

          
                <h5><font size="6" > {t("public_internet_lib.title")} </font></h5>
                <br></br>

                <h1><font size="5.5" > {t("public_internet_lib.find_lib.title")} </font></h1>

                <p><font color="darkslategray">  {t("public_internet_lib.find_lib.para_p1")} 
                <u><Link to='/accessSJ' >
                  {t("public_internet_lib.find_lib.para_linked")} 
                </Link></u>  {t("public_internet_lib.find_lib.para_p2")} 
            </font></p>
            <br></br>

             
                <div className="map">
                <img src="/images/findLib.png" alt='' />
                </div>

                {t("public_internet_lib.find_lib.button_p1")} <t></t><a target="_blank" href="https://storelocator.site/LDAAwP" className="info-btn "> {t("public_internet_lib.find_lib.button_linked")} </a>
                <br></br>
                <br></br>
                
                

            <h1><font size="5.5"> {t("public_internet_lib.public_wifi.title")} </font></h1>

                <p><font color="darkslategray">
                {t("public_internet_lib.public_wifi.para_p1")} 
                <a href="https://311.sanjoseca.gov/" target="_blank"><u> {t("public_internet_lib.public_wifi.para_linked")} </u></a>
                {t("public_internet_lib.public_wifi.para_p2")}   
                </font></p>
            
            <br></br>

            <AllWifi />

          </div>

        </section>

</>

     )
}
export default Resource2
