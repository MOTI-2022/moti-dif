import React, { useState } from "react"
import "./PeopleHome.css"
import CourseData from "./CourseData"
import PeopleCard from "./PeopleCard"

const CourseInfo = () => {
  const [items, setIems] = useState(CourseData)
  return (
    <>
    <div className="wifi">
      <section className='blog top'>

        <div className='container'>

          <div className='content grid'>
            {items.map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </div>
    </>
  )
}

export default CourseInfo
