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
       <Link to='/destinations' className="primary-btn">
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

{/*
    <>


    
        <section className='about1 top1'>
        <div className='container1'>
        </div>
        <h5>
              Frequently Asked Questions
      </h5>
    
      <br></br>


   

      </section>


      <section className='features2 top1'>

   

      <Link to='/destinations' className='primary-btn lib'>
            <i className='fas fa-long-arrow-alt-left'></i> Back to Resources
            </Link>
      <p>
        About Digital Inclusion
      </p>


        <div className='container1 aboutCard1 flex_space1'>


            
            <p>
   

           <br></br>      
          <font size = "3">

       
        
        <br></br>        <br></br>

      
      <Collapsible trigger= {<b>"What is the Digital Inclusion Project?" </b>} >
       
      <p>
        Answer
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
        <b> Question?     </b>

        Answer
        <br></br>        <br></br>


        Question?     

        Answer
        <br></br>        <br></br> </font></p>
      </div>

        <p>
        About Devices and the Internet
      </p>

      <div className='container1 aboutCard1 flex_space1'>


                    
        <p>


        <br></br>          
        <font size = "3">

        How can I find a people to help me configure the current wires at my home? <tab></tab>
        </font>
        
        <font size="3"  color="blue">
         Answer
        </font>
        <br></br>        <br></br>

        <font size = "3" >

        The chromebook I borrowed from SJPL had some problems with it when I was using it. Whom can I ask for help?    
        </font>
        Answer
        <br></br>        <br></br>

        <font size = "3" >

        <b>
        Do I need to turn back the computer to the place where I borrowed from? Can I turn it back to another SJPL branch?    </b>
        </font>
        <font size="3"  color="blue">

        No, you don’ t need to turn back your chromebook exactly to the branch from which you borrow it. You can send it back to any branch that is close to you, as long as the device is well maintained. 
        <br></br>
        Please DO NOT return your Chromebook in the book drop. This might make your laptop missing and you have to pay additional fine for it. Please make sure you return it to our staff in any SJPL branch.
        <br></br>        <br></br> </font></p>
        </div>

        
        

      </section>


          </>*/}