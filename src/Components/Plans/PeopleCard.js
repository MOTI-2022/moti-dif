import React from "react"
import { Link } from "react-router-dom"

const PeopleCard = ({ item: { id, newPage, cover, btnLabel, title, para, page, page1, btnLabel1 } }) => {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt='Gallery Image' />
        </div>


        <div className='details3'>
          <h3>{title}</h3>
         <p>{para}</p>
   

        </div>

        <a href={page} target="_blank" className="peopleItem-link" >{btnLabel}<i className='fa fa-long-arrow-right'></i></a>
        <br></br>
        <a href={page1} target="_blank" className="peopleItem-link" >{btnLabel1}<i className='fa fa-long-arrow-right'></i></a>


 


      </div>
    </>
  )
}

export default PeopleCard
