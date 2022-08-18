import React from "react"
import "../popular/MostPopular.css"
//import Dcards from "../../Destinations/Dcards"
import AllItem from "../../Destinations/AllItem"
import { useTranslation } from "react-i18next";

const DestinationHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1> {t("about.popular_resources.title")} </h1>
            <div className='line'></div>
          </div>

          <div className='content'>
            <AllItem />
          </div>
        </div>
      </section>
    </>
  )
}

export default DestinationHome
