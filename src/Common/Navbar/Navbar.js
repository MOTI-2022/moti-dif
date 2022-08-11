import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Home from "../../Components/HomeSection/Slide";
import {animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>
         {/* <div className = 'pic'>
         
            <div id = "logoImg">
              <img src='/images/logo.jpg' alt='' />
            </div>

            */}
          
        {/*  </div>*/}
        <div className="picture">
          <img src='/images/logo2.png' alt='' />
        </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/*<div className="absolute left-0 top-0 h-1/4 w-1/4 flex-shrink-0">*/}
 

        <li>
          <NavLink exact to="/"  onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} >About</NavLink>
        </li>
       {/* <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/about">
            Learn More
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color:'#5754a8' }} to="/destinations">
            Destinations
          </NavLink>
        </li>*/}
          {/*
            <li>
              <Link to='/' onClick={closeMobileMenu} activeClassName="active">
                About
              </Link>
            </li>*/}
            
            {/*<li>
 
              <NavLink to='/home' onClick={closeMobileMenu} activeClassName="active">
                About
              </NavLink>
            </li>*/}
            <li>
              <NavLink to='/about' onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} activeClassName="active" >
                Learn More 
              </NavLink>
            </li>
            {/*<li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                Get Help
              </Link>
            </li>*/}
 
            <li>
              <NavLink to='/destinations' onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} activeClassName="active">
                Get Help
              </NavLink>
            </li>
            <li>
              <NavLink to='/blog' onClick= {()=>(closeMobileMenu, scroll.scrollToTop(), closeMobileMenu)} activeClassName="active">
                Make An Impact
              </NavLink>
            </li>
            {/*<li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                Learn More
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Learn More
              </Link>
            </li>*/}
          </ul>

         {/* <div className='login-area flex'>
            <li>
              <Link to='/sign-in'>
                <i class='far fa-chevron-right'></i>Sign in
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <i class='far fa-chevron-right'></i>Register
              </Link>
            </li>
            <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request a Quote</button>
              </Link>
            </li>
          </div>*/}
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          {/*<div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>*/}

          {/*<div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>*/}
        </div>
      </header>
    </>
  )
}

export default Navbar
