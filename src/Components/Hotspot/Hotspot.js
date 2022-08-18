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
    {/*<h6><font size = "4" color="brown">Get connected to one-on-one support for your digital needs. <br></br>
  Find in-person or one-on-one support for your technical questions and needs.</font></h6>*/}
      <section className='hs top'>

        {/*<div className='containerHS'>

          <div className='content grid'>*/}
            {t('sj_access.hotspot.hotspot', { returnObjects: true }).map((item) => {
              return <ReportCard key={item.id} item={item} />
            })}
          {/*</div>

        </div>*/}
      </section>
    </>
  )
}

export default AllReports
