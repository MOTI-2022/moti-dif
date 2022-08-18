import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
// import Sdata from "./Sdata"
import { useTranslation } from "react-i18next";

const AllItem = () => {
  // const [items, setIems] = useState(Sdata)
  const { t } = useTranslation();

  return (
    <>
      <section className='gallery desi mtop'>

        <div className='container'>
          <div className='content grid'>
            {t('resource_cards', { returnObjects: true }).map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem

/*
import React, { useState } from "react"
import Dcards from "./Dcards"
import "../gallery/Gallery.css"
import "./Destinations.css"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Sdata from "../Destinations/Sdata"

const Destinations = () => {
  const [items, setIems] = useState(Sdata)
  return (
    <>
      <HeadTitle />
      <section className='gallery desi top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Destinations*/
