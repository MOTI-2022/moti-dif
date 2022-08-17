//import React from "react"
import "./AccessSJ.css"

import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"
import MostPopular from "../HomeSection/popular/MostPopular";
import AdvSkills from "../HomeSection/advancedSkills/AdvSkills";
import React, { useEffect, useState } from "react";

import AllBlog from "../Blog/AllBlog"

import AllWifi from "../Wifi/AllWifi";
import AllReports from "../Reports/AllReports";

import CourseInfo from "../CourseInfo/CourseInfo"
import Devices from "../Devices/CourseInfo";
import Hotspot from "../Hotspot/Hotspot";

const AccessSJ = () => {
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
      SJ Access Services {/*<span>Story</span>*/}

              {/*<br></br>
              <font size="5">Find an affordable home internet plan that works for you.</font>
              <br></br>*/}



      </h5>
      <div className="plan">
     {/* <u><b><font size="5">DEVICES</font></b></u>
              <br></br>*/}

              <h5><u><b><font size="5">Devices</font></b></u></h5>


<h6><font size="4">In different branches of San Jose public libraries, San Joséans can borrow a laptop, Chromebook or an iPad, together with a Wi-Fi hotspot. <br></br>
NOTE: check the following cards to get more details of the availability, durations of rental, turning back policies of each device.
</font></h6></div>
<br></br>
  
      {/*<MostPopular />

      <AdvSkills />*/}

      <div className='container1'>
        <Devices />
        <div className="plan">

       {/* <u><b><font size="5">WIFI HOTSPOT</font></b></u>
              <br></br>*/}
        </div>

        <Hotspot />


        {/*  <AboutCard />*/}
        </div>
      
      <section className='about1 top1'>



    
      <br></br>


   

      </section>
      <MostPopular />


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

export default AccessSJ
