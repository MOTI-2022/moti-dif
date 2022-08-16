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

const Resource2 = () => {
  {/*const [data, setData] = useState([]);*/}
  const [item, setQuestions] = useState(data);


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

          
                <h5><font size="6" >Public Free Internet/ Find a Library</font></h5>
                <br></br>

                <h1><font size="5.5" >Find Your San José Public Library</font></h1>

                <p><font color="darkslategray">All San José Public Library locations are equipped for your digital needs, such as computer rooms, free public Wi-Fi, or hotspot and tech devices available for rent. Please visit our      
                <u><Link to='/access' >
             SJ access
                </Link></u> page for more information on renting hotspot or computing devices.
            </font></p>
            <br></br>

             
                <div className="map">
                <img src="/images/findLib.png" alt='' />
                </div>

                Find your local San José Public Library <t></t><a target="_blank" href="https://storelocator.site/LDAAwP" className="info-btn ">here</a>
                <br></br>
                <br></br>
                


             

            <h1><font size="5.5" >Free Public Wifi</font></h1>

                <p><font color="darkslategray">Access free, public Wi-Fi on your device in select locations throughout San José.</font></p>

                <p><font color="darkslategray">San José currently provides free and unlimited access to the internet at all San José Public Library locations, in downtown San José, and in East San José.</font></p>
                <br></br>

            <AllWifi />

          </div>

        </section>

</>

     )
}
export default Resource2
