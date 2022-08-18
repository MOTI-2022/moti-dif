import React from "react"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import AllItem from "./AllItem"
import MostPopular from "../HomeSection/popular/MostPopular"
import ScrollToTop from "react-scroll-to-top";
import { useTranslation } from "react-i18next";



const Destinations = () => {
  const { t } = useTranslation();

  return (
    <div>
      <HeadTitle />
      <ScrollToTop smooth />

      <h5><font size = "6"> {t("get_help.title")} </font></h5>

      <AllItem />
      {/*<MostPopular />
      <Faq />*/}
    </div>
  )
}

export default Destinations
