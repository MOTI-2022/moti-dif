import React, { useState } from "react"
import "./PeopleHome.css"
// import WifiData from "./WifiData"
import PeopleCard from "./PeopleCard"
import { useTranslation } from "react-i18next";

const AllWifi = () => {
  // const [items, setIems] = useState(WifiData)
  const { t } = useTranslation();
  
  return (
    <>
    <div className="pl">
      <section className='blog top'>

        <div className='container'>

          <div className='content grid'>
            {t('public_internet_lib.public_wifi.cards', { returnObjects: true }).map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </div>
    </>
  )
}

export default AllWifi
