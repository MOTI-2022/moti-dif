//import React from "react"
import "./Courses.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import AdvSkills from "../HomeSection/advancedSkills/AdvSkills";
import React, { useEffect, useState } from "react";






const Courses = () => {
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
              Digital Literacy Training{/*<span>Story</span>*/}
      </h5>
      <MostPopular />

      <AdvSkills />


      <section className='about1 top1'>
        <div className='container1'>
        {/*  <AboutCard />*/}
        </div>
        
    
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

export default Courses
