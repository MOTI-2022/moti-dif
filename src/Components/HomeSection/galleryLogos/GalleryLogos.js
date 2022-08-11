import React from "react"
import data from "./data"
import "./galleryLogos.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const GalleryLogos = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,

  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {data.map((value) => {
              return (
                <div className='box'>
                  <img src={value.cover} alt='' />
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default GalleryLogos
