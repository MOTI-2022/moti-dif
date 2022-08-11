//import React from "react"
import "./Help1.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";





const Help1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      setData([]);
      <ScrollToTop smooth />

    };
  }, []);


  return (
    <>
      {/*<HeadTitle />*/}

      <ScrollToTop smooth />

      <section className='about1 top1'>
        <div className='container1'>
        {/*  <AboutCard />*/}
        </div>
        <h5>
              Volunteer as a Digital Navigator {/*<span>Story</span>*/}
      </h5>
    
      <br></br>
      <p>

      If you are interested in being a Digital Navigator, please contact our grantee and partner organizations for any volunteer opportunities!
      </p>
      <br></br>

   

      </section>


      <section className='features1 top1'>

   

      <Link to='/blog' className='primary-btn lib'>
            <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>



        <div className='container1 aboutCard1 flex_space1'>

            {/*<div className='row row1'>*/}

           {/* <p>             <a href="https://www.sjpl.org/volunteer-how-to">SJPL</a> */}
            
            <p>
   

           <br></br>           <br></br>
          <font size = "5">
          <b>San Jose Public Library </b><tab></tab><tab></tab>
          <a href="https://www.digitalinclusion.org/digital-navigator-model/#:~:text=Who%20Are%20Digital%20Navigators%3F,community%20members%20through%20repeated%20interactions" target="_blank" className="info-btn lib" >Volunteer</a>

            
           
            <br></br><br></br>

            <b>Catholic Charities of Santa Clara County </b><tab></tab><tab></tab>
          <a href="https://www.catholiccharitiesscc.org/volunteer?locale=en" target="_blank" className="info-btn lib" >Volunteer</a>

            
           
            <br></br><br></br>
            
            <b>Closing the Divide </b><tab></tab><tab></tab>
          <a href="https://closingthedivide.foundation/volunteer" target="_blank" className="info-btn lib" >Volunteer</a>

            
           
            <br></br><br></br>

            <b>International Children Assistance Network, Inc. (ICAN) </b><tab></tab><tab></tab>
          <a href="https://www.ican2.org/volunteer-career-opportunities" target="_blank" className="info-btn lib" >Volunteer</a>

            

            <br></br>            <br></br>


            <b>Sacred Heart Community Service</b> <tab></tab><tab></tab>
          <a href="https://www.sacredheartcs.org/volunteer" target="_blank" className="info-btn lib" >Volunteer</a>

            

            <br></br>            <br></br>
            <br></br>           <br></br>

            <b>Sourcewise</b> <tab></tab><tab></tab>
          <a href="https://mysourcewise.com/support-sourcewise/volunteer/" target="_blank" className="info-btn lib" >Volunteer</a>

            

            <br></br>            <br></br>


            <b>Tech Exchange (The Oakland Public Education Fund) </b><tab></tab><tab></tab>
          <a href="https://www.oaklandedfund.org/programs/volunteer/" target="_blank" className="info-btn lib" >Volunteer</a>

            

            <br></br>            <br></br>

            <b>The Vietnamese Voluntary Foundation, Inc. (VIVO) </b><tab></tab>
          <a href="https://www.vivousa.org/contact" target="_blank" className="info-btn lib" >Volunteer</a>

          <br></br>            <br></br>
      

            
            </font>
             </p>
            <p> 
             <font size ="5"> Learn more about what a digital navigator is </font>
            <a href="https://www.digitalinclusion.org/digital-navigator-model/#:~:text=Who%20Are%20Digital%20Navigators%3F,community%20members%20through%20repeated%20interactions" target="_blank" className="dignav-btn lib" >*here*</a>
            </p>
            <br></br>
            <p>
            <font size ="5">
                For all other inquiries, please contact our Program Director, Charlene Tatis, at <b>  <u>info@sjdigitalinclusion.org </u> </b></font></p>
            
            {/*<button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>*}
          </div>

          <div className='row image'>
           {/* <img src='/images/dif.png' alt='' />*/}


          {/*</div>*/}


        </div>

        
        

      </section>


    </>
  )
}

export default Help1
