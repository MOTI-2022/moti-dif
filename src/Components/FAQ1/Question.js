import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import "./FAQ1.css"
const Question = ({ title, info }) => {
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
      {expanded && <p>{info}</p>}
    </article>
  )
}

export default Question