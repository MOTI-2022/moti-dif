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

const Rev = () => {
  const [item, setQuestions] = useState(data);


  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
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


            {/* --------- main-content--------- */}

            <article className='content flex_space'>
              <div className='main-content'>
                <img src="/images/deviceOrg.jpg" alt='' />

                <div className='category flex_space'>
                <br></br>
                  <label>For Organizations</label>
                </div>

                <h1> Donate Corporate Devices </h1>

                <a href="https://www.revivn.com/contact-us" target="_blank" className="primary-btn lib" >Click here</a>
                <font size="10">

                  <p>If you would like to donate your corporate devices, please contact Revivn and state that you would like to donate to the San José Digital Inclusion Fund. Example message below:</p>


                  <div className='para flex_space'>
                    <p> Example message:
                    Hello, I am a corporate donor representative for [corporation], and would like to discuss donating devices for the San José Digital Inclusion Fund. My contact information is [contact information], please let me know how we can proceed. Thank you so much!`,
                    </p>
                  
                  </div>

                
                </font>
                <p>
                  <font size="5">Contact Revivn</font>


                  <br></br>Phone: +1 347 762 8193<br></br>
                  Email: <a href="mailto:info@sjdigitalinclusion.org"><u>concierge@revivn.com</u></a>
                </p>

                <font size="10">
                  <p>OTHER <br></br>
                  For all other inquiries, please contact our Program Director, Charlene Tatis, at   <a href="mailto:info@sjdigitalinclusion.org"><u>info@sjdigitalinclusion.org</u></a>
                  </p>
                </font>
                

              </div>
             
            </article>
          </div>
        </section>

    </>

     )
}
export default Rev
