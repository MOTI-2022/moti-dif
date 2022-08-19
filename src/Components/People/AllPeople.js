import React, { useState } from "react"
import "./PeopleHome.css"
// import PeopleData from "./PeopleData"
import PeopleCard from "./PeopleCard"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AllPeople = () => {
  // const [items, setIems] = useState(PeopleData)
  const { t } = useTranslation();

  return (

    <>
    <br></br>
       <Link to='/destinations' className="primary-btn">
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>
            <br></br>
    <h5><font size = "6" > {t("people.title")} </font></h5>
    <h6><font size = "4" > {t("people.para")} </font></h6>
      <section className='people top'>

        <div className='containerPeople'>

          <div className='content grid'>
            {t("people.cards", { returnObjects: true }).map((item) => {
              return <PeopleCard key={item.id} item={item} />
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default AllPeople
