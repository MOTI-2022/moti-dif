import React from "react"
import "./About.css"
import { useTranslation } from "react-i18next";

const AboutCard = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className='aboutCard mtop flex_space background-color: blue'>
        <div className='row row1'>
          <h1>
          <span> {t("about.header.title1")} <br></br> {t("about.header.title2")} </span> 
          </h1>
          <p> {t("about.header.tag")} </p>

        </div>
        <div className='row image'>
          <img src='/images/about.png' alt='' />

        </div>
        
      </div>
      <div className='row image'>
      </div>
    </>

    
  )


}

export default AboutCard
