import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import Home from "../../Components/HomeSection/Slide";
import {animateScroll as scroll } from "react-scroll";
import LanguageSelect from "../../languageSelect";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
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
         
        <div className="picture">
          <NavLink exact to="/"  onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} >
            <img src='/images/logo2.png' alt='San José Digital Inclusion Fund Logo' />
          </NavLink>
        </div>

       
        <div className="language-select">
          <LanguageSelect />
        </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
 
        
        <li>
         {/* <NavLink exact to="/"  onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} >About</NavLink>*/}
          <NavLink exact to="/"  onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} >{t("nav.about")}</NavLink>
        </li>
      
            
           
            <li>
              <NavLink to='/about' onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} activeClassName="active" >
              {t("nav.learn_more")} 
              </NavLink>
            </li>
 
 
            <li>
              <NavLink to='/resources' onClick= {()=>(scroll.scrollToTop(), closeMobileMenu)} activeClassName="active">
              {t("nav.get_help")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/split' onClick= {()=>(closeMobileMenu, scroll.scrollToTop(), closeMobileMenu)} activeClassName="active">
              {t("nav.make_impact")}
              </NavLink>
            </li>
            
          </ul>

       
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
         
        </div>
      </header>
    </>
  )
}

export default Navbar
