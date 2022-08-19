import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import "./FAQ1.css"
import { Link } from 'react-router-dom'
const Question = ({ title, info, page, page1, page1Name, pageName}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className='questionFAQ'>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='question-title1'>
          {title}
        </h4>
        <button className='btn1' onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{info}<br></br>{<a href={page} target="_blank"><u>{pageName}</u></a>}
      <br></br>
      <Link to={page1} target="_blank" >
      <u> {page1Name}</u>
      </Link>
      </p>
      
      }

    </article>
  )
}

export default Question