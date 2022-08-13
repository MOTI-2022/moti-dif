import React from "react"
import "../popular/MostPopular.css"
import "./Works.css"
import Card from "./Card"
import Wdata from "./Wdata"

const Works = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>Digital Divide · Digital Inclusion · Digital equity</h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
          
            {Wdata.map((value, index) => {
              return <Card key={index} cover={value.cover} title={value.title} title1={value.title1} desc={value.desc} desc1= {value.desc1} icon={value.icon} />

            })     

               }


          </div>
          
        </div>
      </section>
    </>
  )
}

export default Works
