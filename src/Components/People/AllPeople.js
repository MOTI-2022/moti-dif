import React, { useState } from "react"
import "./PeopleHome.css"
import PeopleData from "./PeopleData"
import PeopleCard from "./PeopleCard"

const AllPeople = () => {
  const [items, setIems] = useState(PeopleData)
  return (
    <>
    <h5><font size = "6" >In person help</font></h5>
    <h6><font size = "4" color="brown">Get connected to one-on-one support for your digital needs. <br></br>
  Find in-person or one-on-one support for your technical questions and needs.</font></h6>
      <section className='people top'>

        <div className='containerPeople'>

          <div className='content grid'>
            {items.map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default AllPeople
