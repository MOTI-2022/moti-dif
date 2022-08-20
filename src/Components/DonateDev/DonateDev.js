//import React from "react"
import "../Blog/BlogHome.css"
import "./Help2.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";
import data from "../Blog/BlogData";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import EmptyFile from "../../Common/Empty/EmptyFile";

const DonateDev = () => {
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
            <Link to='/blog2' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>


          

            <article className='content flex_space'>
              <div className='main-content'>
                <img src="/images/deviceInd.jpg" alt='' />

                <div className='category flex_space'>
                <br></br>
                  <label>For Individuals</label>
                </div>

                <h1> Donate Devices </h1>
                <a href="https://closingthedivide.foundation/ewaste-1" target="_blank" className="primary-btn lib" >Click here</a>

                <font size="10">


                <p>Donate your old computers and devices to Closing the Divide’s E-Waste Program! Your devices will refurbished and then donated to households in need.  <br></br>
                
                </p>
              

              </font>

                <font size="10">
                <p>OTHER <br></br>
                For all other inquiries, please contact our Program Director, Charlene Tatis, at  <a href="mailto:info@sjdigitalinclusion.org"><u>info@sjdigitalinclusion.org</u></a>
                </p>
                </font>
                

              </div>
              
            </article>
          </div>
        </section>

</>

     )
}
export default DonateDev
