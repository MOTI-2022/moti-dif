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

const Money = () => {
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
            <Link to='/org' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            <article className='content flex_space'>
              <div className='main-content'>
                <img src="/images/apply.jpg" alt='' />

                <div className='category flex_space'>
                <br></br>
                  <label>For Organizations</label>
                </div>

                <h1> Apply to the Digital Inclusion Fund </h1>

                <font size="10">

                <p>GRANT APPLICATIONS CLOSED ON FEBRUARY 1, 2022! <br></br>
                
                Please check back with us for future Grant opportunities. <br></br><br></br>
                DETERMINE WHETHER YOU ARE ELIGIBLE TO APPLY: **You are eligible to apply if you meet ALL of the following criteria: <br></br>
                - You are a 501(c)(3), public agency, or educational institution.<br></br>-You provide services to San José residents in areas such as  
                (but not limited to) education, workforce development, homelessness, healthcare, affordable housing, public safety, emergency preparedness, or another social service. 
                <br></br>- You are already addressing or would like to address the digital needs of San José residents.
                
                </p>
              

                <div className='para flex_space'>
                  <p><u>LEARN MORE</u><br></br>
                  These resources will help you understand how a Digital Inclusion Grant can benefit residents you serve. Aditional resources, including Frequently Asked Questions and a sample Work Plan and Budget are available in a shared folder: Click below!
                  </p>
   
                 
                </div></font>
                <a href="https://drive.google.com/drive/folders/1sRrfWosqnx19bNaTV6iICCvNaGQv8-M4" target="_blank" className="primary-btn lib" >Click here</a>


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
export default Money
