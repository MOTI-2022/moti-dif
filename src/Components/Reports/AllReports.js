import React, { useState } from "react"
import "./Reports.css"
import ReportData from "./ReportData"
import ReportCard from "./ReportCard"

const AllReports= () => {
  const [items, setIems] = useState(ReportData)
  return (
    <>
    <h5><font size = "6" >Key Reports of San José Digital Inclusion Project</font></h5>
    {/*<h6><font size = "4" color="brown">Get connected to one-on-one support for your digital needs. <br></br>
  Find in-person or one-on-one support for your technical questions and needs.</font></h6>*/}
      <section className='pl top'>

        <div className='containerReport'>

          <div className='content grid'>
            {items.map((item) => {
              return <ReportCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default AllReports
