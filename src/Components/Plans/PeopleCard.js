import React from "react"
import { Link } from "react-router-dom"

const PeopleCard = ({ item: { id, newPage, cover, btnLabel, title, para, page, page1, btnLabel1 } }) => {
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

        <div className='details3'>
          <h3>{title}</h3>
         <p>{para}</p>
          {/*<p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>*/}

        </div>

        {/*<Link to={`/blogsingle/${id}`} className='blogItem-link'>*/}
        {/*<Link to={`/${newPage}/${id}`} className='blogItem-link'>
        
        
        
        <Link to={`/${newPage}`} className='peopleItem-link'>
          CLICK ME <i className='fa fa-long-arrow-right'></i>
        </Link>

        */}
        <a href={page} target="_blank" className="peopleItem-link" >{btnLabel}<i className='fa fa-long-arrow-right'></i></a>
        <br></br>
        <a href={page1} target="_blank" className="peopleItem-link" >{btnLabel1}<i className='fa fa-long-arrow-right'></i></a>


 


      </div>
    </>
  )
}

export default PeopleCard
