import React, { useState } from "react"
import "./BlogHome.css"
import BlogData from "./BlogData"
import BlogCard from "./BlogCard"
import { Link } from "react-router-dom"

const AllBlog = () => {
  const [items, setIems] = useState(BlogData)
  return (
    <>
    <h5><font size = "5">Make An Impact - For Individuals</font></h5>

 
      <section className='blog top'>

        <div className='container'>


            <Link to='/split' className='primary-btn' > 
              <i className='fas fa-long-arrow-alt-left'></i>  Make an Impact
            </Link>
            <br></br><br></br>
          <div className='content grid'>
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default AllBlog
