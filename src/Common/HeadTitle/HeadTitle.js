import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>

      <section className='image-heading' img src= 'images/dif.png' alt='' >

      </section>
    </>
  )
}

export default HeadTitle
