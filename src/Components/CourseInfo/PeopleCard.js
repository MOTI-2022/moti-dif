import React from "react"
import { Link } from "react-router-dom"

const PeopleCard = ({ item: { id, newPage, cover, btnLabel, title, para, para1,para2,para3, page, page1,page2, btnLabel1, btnLabel2 } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>

        {/*
        <div className='category flex_space'>
          <span>{date}</span>
          <label>{catgeory}</label>
        </div>*/}

        <div className='details'>
          <h3>{title}</h3>
          <p>{para}</p>


        </div>

        {/*<Link to={`/blogsingle/${id}`} className='blogItem-link'>*/}
        {/*<Link to={`/${newPage}/${id}`} className='blogItem-link'>
        
        
        
        <Link to={`/${newPage}`} className='peopleItem-link'>
          CLICK ME <i className='fa fa-long-arrow-right'></i>
        </Link>

        */}
        <font color = "blue">
        <a href={page} target="_blank" className="peopleItem-link" >{btnLabel}   </a> <t/>
  

        <a href={page1} target="_blank" className="peopleItem-link" >{btnLabel1}   </a> <t/>
    

        <a href={page2} target="_blank" className="peopleItem-link" >{btnLabel2}</a>
        </font>


      </div>
    </>
  )
}

export default PeopleCard
