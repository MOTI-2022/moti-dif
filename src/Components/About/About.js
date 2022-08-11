//import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Download from "../HomeSection/Download/Download"
import { Timeline } from "../timeline/timeline.jsx"
import GalleryLogos from "../HomeSection/galleryLogos/GalleryLogos"
// // FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import FAQ1 from "../FAQ1/FAQ1"
import ScrollToTop from "react-scroll-to-top";


import Collapsible from 'react-collapsible';
import Grantees from "../../Grantees/Grantees"

{/*import { Collapsible } from 'react-simple-collapsible';*/}

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu0xgi-GhygPSLrucbbBQl8YEmyxMsugQ",
  authDomain: "dif-website-9ab34.firebaseapp.com",
  projectId: "dif-website-9ab34",
  storageBucket: "dif-website-9ab34.appspot.com",
  messagingSenderId: "592525977813",
  appId: "1:592525977813:web:cb794b6436b09acf2eda5c",
  measurementId: "G-RFEDNER72Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    apiCall();
    return () => {
      setData([]);
    };
  }, []);

  async function apiCall() {
    const querySnapshot = await getDocs(query(collection(db, "timeline"), orderBy("date", "desc")));
    querySnapshot.forEach((doc, key) => {
      console.log(doc.data())
      let document = { key: key, docID: doc.id, docData: doc.data() }; // This is custom object I created and added the data received from backend
      setData((prevState) => [...prevState, document]); // Here we append each document to an array, which is our state called "data"
    });
  }
  return (
    <>
      <HeadTitle />

      <ScrollToTop smooth />

      <section className='about top'>
        <div className='container'>
        {/*  <AboutCard />*/}
        </div>

      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Who We Are: <span>Our Story</span>
            </h1>
            <p>San José is the first city in the country to pledge to close the Digital Divide by establishing the Digital Inclusion Fund, a $24 million cross-sector fund that will be distributed in grant awards over a ten-year period. The fund is raised through innovative public-private partnerships, private and public philanthropic donors, and matched City funding. </p>
            <p>The City of San José, in partnership with the City of San José Mayor’s Office of Technology and Innovation, has engaged the California Emerging Technology Fund to work with community organizations and administer grant making. The Digital Inclusion Partnership will disburse approximately $500K - 1M each year to organizations in San José who are closing the Digital Divide through expanding Internet connectivity, device access and digital literacy skills.</p>
            <p>The Partnership will target three key components of Digital Inclusion: </p>
      <tab></tab> <tab></tab> <p>  1. Access programs: providing internet connectivity to residents<br></br>
      <tab></tab>
2. Device programs: ensuring every resident has a working device<br></br>
      <tab></tab>
3. Digital literacy: enhancing digital skills to access jobs, educational opportunities & critical services

</p>

            <button className='secondary-btn'>
              Explore More <i className='fas fa-long-arrow-alt-right'></i>
            </button>
          </div>

          <div className='row image'>
           {/* <img src='/images/dif.png' alt='' />*/}
            <iframe width="400" height="315" src="https://www.youtube.com/embed/sN1S--keOXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
                </button>

              
            </div>
          </div>


        </div>
       {/* <Download />*/}

      </section>

      {/*<section>*/}
      <div className="h5">
          Our <span>Milestones</span>
        </div>
        <div className="App">
        <div className = "coll">
        <tab></tab>        <tab></tab>
        <tab></tab>

        <Collapsible trigger="Show timeline" triggerWhenOpen="Hide timeline" open= "true"  >
  
    
          {data && ( // This just says: if data exists, then show this code
          
            <VerticalTimeline>
              {data.map((item, key) => {
                return (
                  <Timeline timelineData={item.docData}/>
                  );
              })}
            </VerticalTimeline>
          )}
        </Collapsible>
              </div>

              <Grantees>

              </Grantees>
              {/* <div className = "coll">

             <Collapsible trigger="Grantees 2022" triggerWhenOpen="Collapse Grantees 2022" open= "true"  >
             <tab></tab> <h6>hello </h6><br></br>
             <tab></tab> <h6>hello </h6><br></br>
             <tab></tab>  <h6>hello </h6><br></br>
              </Collapsible>
              <Collapsible trigger="Grantees 2021" triggerWhenOpen="Collapse" open= "false"  >
              <tab></tab> <h6>hello </h6><br></br>
             <tab></tab> <h6>hello </h6><br></br>
             <tab></tab>  <h6>hello </h6><br></br>
              </Collapsible>
              <Collapsible trigger="Grantees 2020" triggerWhenOpen="Collapse" open= "false"  >
              <tab></tab> <h6>hello </h6><br></br>
             <tab></tab> <h6>hello </h6><br></br>
             <tab></tab>  <h6>hello </h6><br></br>
              </Collapsible>
              </div>*/}

            <div className="h4">
              Also, special thanks to the institutions that have rendered tremendous financial and technical support during the past years, in random order:
            </div>
            <GalleryLogos/>
        </div>

     {/* </section>*/}
    </>
  )
}

export default About
