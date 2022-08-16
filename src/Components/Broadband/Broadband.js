//import React from "react"
import "./Broadband.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import AdvSkills from "../HomeSection/advancedSkills/AdvSkills";
import React, { useEffect, useState } from "react";

import AllBlog from "../Blog/AllBlog"

import AllWifi from "../Wifi/AllWifi";

import CourseInfo from "../CourseInfo/CourseInfo"
import Plans from "../Plans/Plans"

const Broadband = () => {
  const [data, setData] = useState([]);

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
      <h5>
      Wired - Broadband Plan {/*<span>Story</span>*/}

              <br></br>
              <font size="5">Find an affordable home internet plan that works for you.</font>
              <br></br>



      </h5>
      <div className="plan">
      <u><font size="4">Affordable Broadband Plans:</font></u>
              <br></br>

<font size="3">If you need an affordable home internet plan for you or your household, check out these flyers for instructions on determining your eligibility and signing up for a plan.
If you are a San José resident and need assistance with connecting to affordable internet at home, please call (408) 716-3811 and you will be transferred to an organization that can assist you.
</font></div>
<br></br>
<br></br>
  
      {/*<MostPopular />

      <AdvSkills />*/}

      <div className='container1'>
        <Plans />


        {/*  <AboutCard />*/}
        </div>
      
      <section className='about1 top1'>



    
      <br></br>


   

      </section>


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

export default Broadband
