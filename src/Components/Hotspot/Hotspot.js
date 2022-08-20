import React, { useState } from "react"
import "./Reports.css"
// import ReportData from "./ReportData"
import ReportCard from "./ReportCard"
import { useTranslation } from "react-i18next";

const AllReports= () => {
  // const [items, setIems] = useState(ReportData)
  const { t } = useTranslation();

  return (
    <>
    <h5><u><b><font size="5"> {t("sj_access.hotspot.title")} </font></b></u></h5>
  
      <section className='hs top'>

            {t('sj_access.hotspot.hotspot', { returnObjects: true }).map((item) => {
              return <ReportCard key={item.id} item={item} />
            })}
       
      </section>
    </>
  )
}

export default AllReports
