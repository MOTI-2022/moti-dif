import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BlogData from "../BlogData"
import EmptyFile from "../../../Common/Empty/EmptyFile"
import HeadTitle from "../../../Common/HeadTitle/HeadTitle"
import { useParams } from "react-router-dom"

const BlogSingle = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  return (
    <>
      <HeadTitle />

      {item ? (
        <section className='single-page top'>
          <div className='container'>
            <Link to='/blog' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>


            {/* --------- main-content--------- */}

            <article className='content flex_space'>
              <div className='main-content'>
                <img src={item.cover} alt='' />

                <div className='category flex_space'>
                <br></br>
                  {/*<span>{item.date}</span>*/}
                  <label>{item.catgeory}</label>
                </div>

                <h1> {item.title} </h1>

                <a href={item.page} target="_blank" className="primary-btn lib" >Click here</a>
                <font size="10">

                <p>{item.desc}</p>
                {/*<p>{item.desc}</p>

                <h2>Two Column Text Sample</h2>*/}

                <div className='para flex_space'>
                  <p>{item.para}</p>
                 
                </div>

                <p>

                <font size="5">{item.contact} {item.contact1} </font>


                  <br></br>{item.contact2}<br></br>
                  {item.contact3}
                </p>
               
                </font>
                

                <font size="10">
                <p>OTHER <br></br>
                For all other inquiries, please contact our Program Director, Charlene Tatis, at  <a href="mailto:info@sjdigitalinclusion.org"><u>info@sjdigitalinclusion.org</u></a>
                </p>
                </font>
                

              </div>
              {/* --------- main-content--------- */}             

              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default BlogSingle
