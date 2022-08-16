import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"
import Gallery from "../..//Components/HomeSection/gallery/Gallery"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <h2>SAN JOSÉ DIGITAL INCLUSION FUND</h2>
            <font size="3" color="white">San Jose Mayor’s Office of Tech & Innovation</font>
            <br />
            <p><b>Address</b>: 200 E Santa Clara St, San Jose, CA 95113</p>
            <p><b>Email us</b>: <a href="mailto:info@sjdigitalinclusion.org"><u>info@sjdigitalinclusion.org</u></a></p>
            <div className='icon flex_space'>
            <a href="https://www.instagram.com/sanjosemoti/?hl=en" target="_blank"><i className='fab fa-instagram'></i></a>
            <a href="https://www.motisanjose.org" target="_blank"><i className='fa fa-globe'></i></a>
                  


              {/*<i className='fab fa-facebook-f'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-linkedin'></i>
              <i className='fab fa-pinterest'></i>
              <i className='fab fa-youtube'></i>*/}
            </div>

          </div>
          <div className="b1">
          <div className='box'>

            <h2>FAST TRACKS</h2>
            <ul>
            
              <li>
                <Link to='/accessSJ'>SJ Access Services</Link>
              </li>
              <li>
                <Link to='/singlepage/2'>Public Free Internet</Link>
              </li>
              <li>
                <Link to='/broadband'>Broadband Connection</Link>
              </li>
              <li>
                <Link to='/courses'>Digital Literacy Training</Link>
              </li>
              <li>
                <Link to='/people'>People Offering Help</Link>
              </li>
              {/*
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>*/}
              
            </ul>
          </div>
          </div>

          {/*<div className='box post'>*/}
          <div className="box">
            <h2>EXTERNAL LINKS</h2>
            <ul>
              <li>
              <a href="https://www.sanjoseca.gov/" target="_blank">City of San José</a>
              </li>
              <li>
              <a href="https://www.cetfund.org/" target="_blank">California Emerging Technology Fund (CETF)</a>
              </li>
              <li>
              <a href="https://www.sjpl.org/" target="_blank">San Jose Public Library (SJPL)</a>
              </li>
{/*
              <li>
                <Link to='/courses'>Digital Literacy Training</Link>
              </li>
              <li>
                <Link to='/people'>People Offering Help</Link>
              </li>
              
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact Us</Link>
              </li>*/}
            </ul>
            {/*<ul>
              <li>
                <p>City oF San José</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>
                <label className='fa fa-calendar-alt'></label>
                <span>01 Oct 2020</span>
              </li>
            </ul>*/}
          </div>

        </div>
        <Gallery />

      </footer>

      {/*
      <div className='legal'>
        <p>© 2022 All Rights Reserved.</p>

      </div>*/}
    </>
  )
}

export default Footer
