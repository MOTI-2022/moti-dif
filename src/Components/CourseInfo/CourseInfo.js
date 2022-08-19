import React, { useState } from "react"
import "./PeopleHome.css"
// import CourseData from "./CourseData"
import PeopleCard from "./PeopleCard"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CourseInfo = () => {
  // const [items, setIems] = useState(CourseData)
  const { t } = useTranslation();

  return (
    <>
     
    <div className="wifi">

      <section className='pl top'>

        <div className='container'>

  

          <div className='content grid'>
            {t('digital_literacy.cards', { returnObjects: true }).map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </div>
    </>
  )
}

export default CourseInfo
