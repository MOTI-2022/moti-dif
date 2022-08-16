import React from "react"
import { Link } from "react-router-dom"

const PeopleCard = ({ item: { id, newPage, cover, btnLabel, title, desc, para, para1,para2,para3, page, catgeory, date } }) => {
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
        <div className="words">
          <h3>{title}</h3>
          <p>{para}</p>
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
        </div>

        {/*<Link to={`/blogsingle/${id}`} className='blogItem-link'>*/}
        {/*<Link to={`/${newPage}/${id}`} className='blogItem-link'>
        
        
        
        <Link to={`/${newPage}`} className='peopleItem-link'>
          CLICK ME <i className='fa fa-long-arrow-right'></i>
        </Link>

        */}
        <a href={page} target="_blank" className="peopleItem-link" >{btnLabel}<i className='fa fa-long-arrow-right'></i></a>


 


      </div>
    </>
  )
}

export default PeopleCard
