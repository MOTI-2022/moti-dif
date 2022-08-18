import React from "react"
import Cards1 from "./Cards1"
import "./MostPopular.css"
import { useTranslation } from "react-i18next";

const MostPopular = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1> {t("sj_access.self_troubleshooting.title")} <br></br>
            
            </h1>
            <font size="4"> {t("sj_access.self_troubleshooting.para_p1")} <a href="https://sjpl.bibliocommons.com/v2/events?locations=BC_VIRTUAL&types=5d65e9ae2f3a81f8aeaabba3" target="_blank"><u> {t("sj_access.self_troubleshooting.para_linked")} </u></a> {t("sj_access.self_troubleshooting.para_p2")} </font>

            <div className='line'></div>
          </div>

          <div className='content'>

         
            <Cards1 />
          
          </div>
          <h1><div className="playlist">
            <a href="https://www.youtube.com/watch?v=4NkiBN-Tm5g&list=PLK55Ijc_T5idBOCnOUcvIyqUo4gHowBL0&ab_channel=SanJosePublicLibrary" target="_blank"> {t("sj_access.self_troubleshooting.playlist_en")} </a><br></br>
          <a href="https://www.youtube.com/watch?v=DOq1pX12-Sg&list=PLK55Ijc_T5ienj82PhT4PnFqSb6DhgZtV" target="_blank"> {t("sj_access.self_troubleshooting.playlist_es")} </a><t/><br></br>
          <a href="https://www.youtube.com/watch?v=1MNjmW2UnWM&list=PLK55Ijc_T5icZGe2GiS4gwBPMQpxJuMpP&ab_channel=SanJosePublicLibrary" target="_blank"> {t("sj_access.self_troubleshooting.playlist_vi")} </a>
          </div>
          </h1>
         
        </div>
      </section>
    </>
  )
}

export default MostPopular
