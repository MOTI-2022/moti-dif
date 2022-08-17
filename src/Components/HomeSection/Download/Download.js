import React from "react"
import "./download.css"
import { Link } from "react-router-dom"
import {animateScroll as scroll } from "react-scroll";


const Download = () => {
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            {/*<h3>Presenting..</h3>*/}
            <h1>What is the San José Digital Inclusion Fund?</h1>
            <font size="5">
            <ul>
              <li> The San José aims to close the digital divide through the Digital Inclusion Fund, a <b>$24 million</b> cross-sector fund over a ten-year period. By targeting three key components of digital inclusion:</li>
              <li>&#10003; Access programs: providing internet connectivity to residents</li>
              <li>&#10003; Device programs: ensuring every resident has a working device</li>
              <li>&#10003; Digital literacy: enhancing digital skills to access jobs, educational opportunities & critical services</li>              

              {/*<li>&#10003; No booking or credit card fees</li>
              <li>&#10003; No booking or credit card fees</li>
              <li>&#10003; Add your own reviews and photos</li>*/}
              <li> San José is committed to connecting 50,000 San José households </li>
              <li>Learn more about the San José Digital Inclusion Fund        <t></t>   <t></t> 
              <u><Link to='/about' onClick= {()=>(scroll.scrollToTop())} activeClassName="active" >
             here
            </Link></u>
            </li>


            </ul>
            </font>
            <div className='img flex'>
             {/* <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />*/}
            </div>
          </div>
          <br></br>
          <div className='row row2'>
            <img src='/images/difpic.png' alt='' className='image' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Download
