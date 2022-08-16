import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../Components/Destinations/Sdata"
import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./singlepage.css"
import AllBlog from "../Components/Blog/AllBlog"
import AllWifi from "../Components/Wifi/AllWifi"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
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
            <Link to='/destinations' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/*<Link to='/blog' className='primary-btn lib'>
              <i className='fas fa-long-arrow-alt-left'></i> Find a Library
            </Link>*/}


            {/* --------- main-content--------- */}

                {/*<img src={item.image} alt='' />
                <p>{item.desc}</p>
                <p>{item.desc}</p>

                <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>*/}
                {/*<h1>Whta is the {item.title} City ?</h1>*/}
                <h5><font size="6" >{item.title}</font></h5>
                <br></br>

                <h1><font size="5.5" >{item.title1}</font></h1>

                <p><font color="darkslategray">{item.desc1}            
                <u><Link to='/access' >
             SJ access
                </Link></u> page for more information on renting hotspot or computing devices.
            </font></p>
            <br></br>

               {/* <div className='image resources grid1 '>
                  <img src={item.paraImage_one} alt='' />*/}
                 {/* <img src={item.paraImage_two} alt='' />*/}
                {/*</div>*/}
                <div className="map">
                <img src={item.paraImage_one} alt='' />
                </div>

                Find your local San José Public Library <t></t><a target="_blank" href="https://storelocator.site/LDAAwP" className="info-btn ">here</a>
                <br></br>
                <br></br>
                


              {/* --------- main-content--------- */}

              {/* --------- side-content--------- 
              <div className='side-content'>
                <div className='box'>
                  <h2>How can we help you?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                <div className='box2'>
                  <p>{item.sidepara}</p>
                </div>
              </div>
              {/* --------- side-content--------- */}


            <h1><font size="5.5" >{item.title2}</font></h1>

                <p><font color="darkslategray">{item.desc2}</font></p>

                <p><font color="darkslategray">{item.desc3}</font></p>
                <br></br>

            <AllWifi />

          </div>

        </section>


      ) : (
        <EmptyFile />
      )}
    </>
  )
}

export default SinglePage
