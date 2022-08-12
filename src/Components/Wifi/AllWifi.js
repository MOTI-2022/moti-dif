import React, { useState } from "react"
import "./PeopleHome.css"
import WifiData from "./WifiData"
import PeopleCard from "./PeopleCard"

const AllWifi = () => {
  const [items, setIems] = useState(WifiData)
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

export default AllWifi
