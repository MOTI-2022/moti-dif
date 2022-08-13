import React from "react"
import "../popular/MostPopular.css"
import "./Quotes.css"
import CardQuote from "./CardQuote"
import Qdata from "./Qdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>Resident Stories, Resident Testimonies</h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {Qdata.map((value, index) => {
              return <CardQuote key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>

        </div>
        <font size="4">
        Source: <u><a href="https://www.youtube.com/watch?v=3VwLxfUj5ls&ab_channel=SanJos%C3%A9Mayor%27sOfficeofTechnology%26Innovation" target="_blank"  > San José Digital Inclusion Fund</a></u>
        <br></br><br></br></font>
      </section>
      
    </>
  )
}

export default Works
