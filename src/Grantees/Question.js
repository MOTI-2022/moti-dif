import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import "./Grantees.css"
const Question = ({ title, ifOpen, info, info1, info2, info3, info4, info5, info6, info7, info8, info9, info10, info11, info12, info13, info14, info15, info16 }) => {
  const [expanded, setExpanded] = useState(ifOpen)
  return (
    <article className='question1'  >
      <header  >
        <h4 onClick={() => setExpanded(!expanded) } className='question-title1' open="true">
          {title}
        </h4>
        <button is-expanded = "false" className='btn1' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info1}<br></br>{info2}<br></br>{info3}<br></br>{info4}<br></br>{info5}<br></br>{info6}<br></br>{info7}<br></br>{info8}
      <br></br>{info9}<br></br>{info10}<br></br>{info11}<br></br>{info12}<br></br>{info13}<br></br>{info14}<br></br>{info15}<br></br>{info16}</p>}
    </article>
  )
}

export default Question