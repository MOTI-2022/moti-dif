//import React from "react"
import "./Grantees.css"
import Collapsible from 'react-collapsible';


import { useLocation, Link } from "react-router-dom"


import React, { useEffect, useState } from "react";
import SingleQuestion from './Question'
import data from './data'




const Grantees = () => {
  {/*const [data, setData] = useState([]);*/}
  const [questions, setQuestions] = useState(data)


  useEffect(() => {
    // This just tells react to run this code when page first loads
    return () => {
      {/*setData([]);*/}
    };
  }, []);


  return (
    <>


      <div className='containerFAQ'>
      <h6>  <font size = "6"> Grantees & Supporters </font></h6>
        <section className='infoFAQ'>
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}

        </section>

      </div>
    </>
    
  )
}

export default Grantees

