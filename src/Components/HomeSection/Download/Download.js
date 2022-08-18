import React from "react"
import "./download.css"
import { Link } from "react-router-dom"
import {animateScroll as scroll } from "react-scroll";
import { useTranslation } from "react-i18next";


const Download = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='download top'>
        <div className='container flex_space'>
          <div className='row'>
            <h1> {t("about.dif_brief.title")} </h1>
            <font size="3">
            <ul>
              <li> {t("about.dif_brief.pg1")} </li>
              <li>&#10003;  {t("about.dif_brief.check1")} </li>
              <li>&#10003;  {t("about.dif_brief.check2")} </li>
              <li>&#10003;  {t("about.dif_brief.check3")} </li>              

              <li> {t("about.dif_brief.learn_more")} <t></t>   <t></t> 
              <u><Link to='/about' onClick= {()=>(scroll.scrollToTop())} activeClassName="active" >
              {t("about.dif_brief.learn_more_linked")} 
              </Link></u>
            </li>


            </ul>
            </font>
            <div className='img flex'>
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
