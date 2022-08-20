//import React from "react"
import "./FAQ1.css"
import Collapsible from 'react-collapsible';


import Blog from "../Blog/Blog"
import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SingleQuestion from './Question'
// import data from './data'

// import data2 from './data2'



const FAQ1 = () => {
  {/*const [data, setData] = useState([]);*/}
  const { t } = useTranslation();

  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      {/*setData([]);*/}
    };
  }, []);


  return (
    <>
    <br></br>
       <Link to='/resources' className="primary-btn">
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
            <br></br>
      <h5> {t("faq.title")} </h5>

    {/*<div className="allQ">*/}

      <div className='containerFAQ'>
      <h6>  <font size = "5"> {t("faq.subtitle1")} </font></h6>
        <section className='infoFAQ'>
          {t('faq.questions1', { returnObjects: true }).map((question) => (
            <SingleQuestion data key={question.id} {...question} />
          ))}
        </section>
      {/*</div>
      <div className='containerFAQ'>*/}
      <br></br>
      <h6>  <font size = "5"> {t("faq.subtitle2")} </font></h6>
        <section className='infoFAQ'>
          {t('faq.questions2', { returnObjects: true }).map((question) => (
            <SingleQuestion data2 key={question.id} {...question} />
          ))}
        </section>
      </div>
    {/*</div>*/}
    </>
    
  )
}

export default FAQ1

