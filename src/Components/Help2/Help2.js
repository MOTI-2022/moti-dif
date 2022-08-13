//import React from "react"
import "../Blog/BlogHome.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";
import data from "../Blog/BlogData";

import HeadTitle from "../../Common/HeadTitle/HeadTitle";
import EmptyFile from "../../Common/Empty/EmptyFile";

const Help2 = () => {
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
      <Link to='/blog' className='primary-btn back'>
        <i className='fas fa-long-arrow-alt-left'></i> Go Back
      </Link>


      {/* --------- main-content--------- */}

      <article className='content flex_space'>
        <div className='main-content'>
          <img src='/images/donateInd.jpg' alt='' />

          <div className='category flex_space'>
          <br></br>
            {/*<span>{item.date}</span>*/}
            <label>For Individuals</label>
          </div>

          <h1> Donate Money  </h1>

          <a href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MUZC664CJEB32&source=url" target="_blank" className="primary-btn lib" >Click here</a>
          <font size="10">

          <p>All proceeds donated are administered by the California Emerging Technology Fund’s general Digital Inclusion Fund. $30 sponsors a student’s internet through the summer, and $150 buys a refurbished device. We deeply appreciate your support!</p>

          <p>Checks can be written out to the “California Emerging Technology Fund” and note in the Memo section “San Jose Digital Inclusion Fund.”  Mail checks to 333 West San Carlos Street, 6th Floor, San Jose, CA 95110.</p>
          {/*<p>{item.desc}</p>

          <h2>Two Column Text Sample</h2>*/}

          <div className='para flex_space'>
           
          </div>

          <p>

          <font size="5">{item.contact} {item.contact1} </font>


            <br></br>{item.contact2}<br></br>
            {item.contact3}</p>
         
          </font>
          
          {/*

          if({item.id}=1)
          {               
             <a target="_blank" href='https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MUZC664CJEB32&source=url' className="primary-btn lib">Donate here</a>


          }
          else if({item.id}==2)
          {               
             <a target="_blank" href='https://closingthedivide.foundation/ewaste-1' className="primary-btn lib">Donate </a>


          }*/}

          <font size="10">
          <p>OTHER <br></br>
          For all other inquiries, please contact our Program Director, Charlene Tatis, at <u>info@sjdigitalinclusion.org.</u></p>
          </font>
          

        </div>
        {/* --------- main-content--------- */}

        {/* --------- side-content--------- */}
        {/*
        <div className='side-content'>
          <div className='category-list'>
            <h1>Categories</h1>
            <hr />
            <ul>
              {BlogData.map((item) => {
                return (
                  <li>
                    <i className='far fa-play-circle'></i>
                    {item.catgeory}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>*/}

        {/* --------- side-content--------- */}
      </article>
    </div>
  </section>

</>

     )
}
export default Help2
