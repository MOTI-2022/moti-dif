import React from "react"
import "../popular/MostPopular.css"
import "./Works.css"
import Card from "./Card"
// import Wdata from "./Wdata"
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1> {t("about.digital.title")} </h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
          
            {t('about.digital.cards', { returnObjects: true }).map((value) => {
              return <Card cover={value.cover} title={value.title} title1={value.title1} icon={value.icon} />

            })     

               }


          </div>
          
        </div>
      </section>
    </>
  )
}

export default Works
