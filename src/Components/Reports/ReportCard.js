import React from "react"
import { Link } from "react-router-dom"

const ReportCard = ({ item: { id, newPage, cover, btnLabel, title, desc, para, para1,para2,para3, page, catgeory, date } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>

        </div>

        <a href={page} target="_blank" className="read-btn" >Read here <i className='fa fa-long-arrow-right'></i></a>

 


      </div>
    </>
  )
}

export default ReportCard
