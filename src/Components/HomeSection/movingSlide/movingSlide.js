import React from "react"
import "./movingSlide.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../intro/intro.css"
import { useTranslation } from "react-i18next";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="arrows">
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className="arrows">

    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
    </div>
  )
}



const MovingSlide = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    autoplay: false,
      cssEase: "linear",
      arrows: true,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      swipeToSlide: true,
    }

  return (
    <div>


          <Slider {...settings}>
            {t('about.digital.carousel', { returnObjects: true }).map((value) => {


              return (
                <>
                <section className='intro top'>
        <div className='container flex_space'>
          <div className='row'>
            <h1>{value.title}</h1>
            <font size="3">
            <ul>
              <li>{value.text1}</li>
              <li>{value.text2}</li>

            </ul>
            </font>
            <div className='img flex'>
            </div>


            <font size="3">
        {t("about.digital.sources.title")} <u><a href="https://www.digitalinclusion.org/" target="_blank"  > {t("about.digital.sources.source1")}  </a></u> 
        <u><a href="https://www.bcg.com/publications/2022/how-to-close-digital-divide-with-human-approach" target="_blank"  > {t("about.digital.sources.source2")} </a></u>
        <u><a href="https://www.nature.com/articles/s41746-021-00413-8" target="_blank"  > {t("about.digital.sources.source3")} </a></u>
        </font>
          </div>
          <br></br>
          <div className='row row2'>
          <figure>
            <div className="stat">
            <img src={value.cover} alt=''  />
            </div>
            <div className="caption">
            <figcaption>{value.caption}
            </figcaption>
            </div>
          </figure>
          </div>
         
        </div>
      </section>
              </>
              
              )
           
           
           
          })}
          </Slider>
 
      
    </div>
  )
}

export default MovingSlide
