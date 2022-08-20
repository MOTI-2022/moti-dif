import React, { useState } from "react"
import "./PeopleHome.css"
// import CourseData from "./CourseData"
import PeopleCard from "./PeopleCard"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Devices = () => {
  // const [items, setIems] = useState(CourseData)
  const { t } = useTranslation();

  return (
    <>
    <div className="wifi">
      <section className='pl top'>

        <div className='container'>
        <Link to='/resources' className='primary-btn back'>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
          <div className='content grid'>
            {t('sj_access.devices.devices', { returnObjects: true }).map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </div>
    </>
  )
}

export default Devices 
