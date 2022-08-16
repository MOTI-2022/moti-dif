import React from "react"
import "./intro.css"
import { Link } from "react-router-dom"
import {animateScroll as scroll } from "react-scroll";


const Intro = () => {
  return (
    <>
    <div className="carousel">
      <section className='intro top'>
        <div className='container flex_space'>

          <div className='row'>
            {/*<h3>Presenting..</h3>*/}
            <h1>Digital Divide- The Problem</h1>
            <font size="3">
            <ul>
              <li> The <u>digital divide</u> describes the increasing gap between those who have affordable access to the technology, digital skills, and support to effectively engage online and people who do not.</li>
              

              <li> When people cannot access the digital world, they experience barriers to participating in society, such as accessing education, public services and assistance, labor and earning opportunities, and obtaining essential services such as health and financial services. These problems have only been exacerbated by the greater reliance on digital tools since the COVID-19 pandemic. </li>
  


            </ul>
            </font>

          </div>
          <div className='row row2'>
          <figure>
            <div className="stat">
            <img src='/images/statistic1.png' alt=''  />
            </div>
            <div className="caption">
            <figcaption>In 2020, 10% of Californians reported not having a desktop, laptop, or other computing device at home. Access was especially limited among low-income (23%), Black (15%), and Latino (15%) households. (Source: PPIC, 2022)</figcaption>
            </div>
          </figure>
          </div>
          
        </div>

      </section>

<div className="num2">
      <section className='intro top'>
        <div className='container flex_space'>
        <div className='row row2'>
          <figure>
            <div className="stat">
            <img src='/images/statistic2.png' alt=''  />
            </div>
            <div className="caption">
            <figcaption>In Santa Clara County, roughly a quarter of the county’s households don’t have access to the internet (Source: SJ Spotlight Digital Divide)
            </figcaption>
            </div>
          </figure>
          </div>

          <div className='row'>
            {/*<h3>Presenting..</h3>*/}
            <h1>Digital Inclusion- The Work</h1>
            <font size="3">
            <ul>
              <li>  <u>Digital inclusion</u> work includes the activities necessary to ensure that all individuals and communities, particularly the most disadvantaged, have equitable access to and use of digital information, digital communication, and other technologies. </li>
              

              <li> This may look like having affordable and high-speed broadband internet service, internet-capable devices that work for their needs, and having access to digital literacy training and quality technical support. </li>
  


            </ul>
            </font>
            <div className='img flex'>
             {/* <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />*/}
            </div>
          </div>

          
   
        </div>
      </section>
      </div>

      <div className="num2">

      <section className='intro top'>
        <div className='container flex_space'>
          <div className='row'>
            {/*<h3>Presenting..</h3>*/}
            <h1>Digital Equity- The Goal</h1>
            <font size="3">
            <ul>
              <li>  <u>Digital equity</u>  is the goal in which all individuals and communities have the digital information and technological capacity needed for full participation in our society, democracy, and economy.</li>

        <font size="3">
        Sources: <u><a href="https://www.digitalinclusion.org/" target="_blank"  > National Digital Inclusion Alliance;  </a></u> 
        <u><a href="https://www.bcg.com/publications/2022/how-to-close-digital-divide-with-human-approach" target="_blank"  > BCG 2022; </a></u>
        <u><a href="https://www.nature.com/articles/s41746-021-00413-8" target="_blank"  > Sieck et al 2021</a></u>
        </font>

            </ul>
            </font>
            <div className='img flex'>
             {/* <img src='/images/appstore-button.png' alt='' />
              <img src='/images/google-play-button.png' alt='' />*/}
            </div>
          </div>
          <div className='row row2'>
          <figure>
            <div className="stat">
            <img src='/images/statistic3.png' alt=''  />
            </div>
            <div className="caption">
            <figcaption>Over 97,000 older Santa Clara County residents do not have access to broadband at home (Source: Santa Clara County Digital Inclusion Working Group, 2021)
            </figcaption>
            </div>
          </figure>
          </div>
        </div>
      </section>
    </div>
    </div>
    </>
  )
}

export default Intro
