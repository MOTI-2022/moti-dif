import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      {/*{data.map((value) => {*/}

      <section className='image-heading' img src= 'images/dif.png' alt='' >
        <div className='container'>
          {/*<h1>{location.pathname.split("/")[1]}</h1>*/}

          <button>
            {/*<Link to='/'> Home / </Link>
            <span>{location.pathname.split("/")[1]}</span>*/}
          </button>
        </div>
      </section>
  {/*  })}*/}
    </>
  )
}

export default HeadTitle
