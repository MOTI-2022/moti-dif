import React from "react"

const Card = (props) => {
  return (
    <>
    
    
      <div className='box'>
      <div className='icon img'>
          <img src={props.cover} alt='' />
        </div>


        <div className='details'>
        <div className="arrow">
        <img src={props.icon} />
        </div>
        
          <h2><font size="5">{props.title}</font>
        
        <br></br>
        <font size="4">{props.title1}</font>  
    


        </h2>
     
        
        </div>
        
  
      </div>

   

      
    </>
  )
}

export default Card
