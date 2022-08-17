import React from "react"
import Cards1 from "./Cards1"
import "./MostPopular.css"

const MostPopular = () => {
  return (
    <>
      <section className='popular top'>
        <div className='full_container'>
          <div className='heading'>
            <h1>Self Troubleshooting<br></br>
            
            </h1>
            <font size="4">If you have any problems setting up your device, watch these SJ Access videos, available in English, Spanish, or Vietnamese. For any further issues, you can find tech support <a href="https://sjpl.bibliocommons.com/v2/events?locations=BC_VIRTUAL&types=5d65e9ae2f3a81f8aeaabba3" target="_blank"><u>here</u></a>, or ask for help at your local San José Public Library branch.</font>

            <div className='line'></div>
          </div>

          <div className='content'>

         
            <Cards1 />
          
          </div>
          <h1><div className="playlist">
            <a href="https://www.youtube.com/watch?v=4NkiBN-Tm5g&list=PLK55Ijc_T5idBOCnOUcvIyqUo4gHowBL0&ab_channel=SanJosePublicLibrary" target="_blank">Full SJ Access Playlist: English</a><br></br>
          <a href="https://www.youtube.com/watch?v=DOq1pX12-Sg&list=PLK55Ijc_T5ienj82PhT4PnFqSb6DhgZtV" target="_blank">Full SJ Access Playlist: Español</a><t/><br></br>
          <a href="https://www.youtube.com/watch?v=1MNjmW2UnWM&list=PLK55Ijc_T5icZGe2GiS4gwBPMQpxJuMpP&ab_channel=SanJosePublicLibrary" target="_blank">Full SJ Access Playlist: Tiếng Việt</a>
          </div>
          </h1>
         
        </div>
      </section>
    </>
  )
}

export default MostPopular
