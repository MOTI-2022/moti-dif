import React from "react"
import { Link } from "react-router-dom"

const ReportCard = ({ item: { cover, btnLabel, title, para, para1,para2,para3, page } }) => {
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

        <br></br>
        <a href={page} target="_blank" className="read-btn" >{btnLabel}<i className='fa fa-long-arrow-right'></i></a>
        <br></br><br></br>
 
      </div>
    </>
  )
}

export default ReportCard
