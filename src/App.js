import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./Components/Destinations/Home"
//import { Timeline } from './timeline/timeline.jsx'
import {animateScroll as scroll } from "react-scroll";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"


/*-------------blog------------ */
import Blog from "./Components/Blog/Blog"
import Blog1 from "./Components/Blog1/Blog"
import Blog2 from "./Components/Blog2/Blog"


import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle"
import People from "./Components/People/People"
import Reports from "./Components/Reports/Reports"

import PeopleSingle from "./Components/People/people-single-page/PeopleSingle"
import Testimonial from "./Components/Testimonial/Testimonial"
import Contact from "./Components/Contact/Contact"
import Digitalnav from "./Components/Digitalnav/Digitalnav"
import Footer from "./Common/footer/Footer"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import Help1 from "./Components/Help1/Help1"
import Help2 from "./Components/Help2/Help2"
import Resource2 from "./Components/Resource2/Resource2"
import DIF from "./Components/DIF/DIF"
import Money from "./Components/Money/Money"
import DonateDev from "./Components/DonateDev/DonateDev"
import Rev from "./Components/Rev/Rev"


import Split from "./Components/Split/Split"

import FAQ1 from "./Components/FAQ1/FAQ1"
import Courses from "./Components/Courses/Courses"
import Broadband from "./Components/Broadband/Broadband"
import AccessSJ from "./Components/AccessSJ/AccessSJ"
import Grantees from "./Grantees/Grantees"

/*-------------blog------------ */

// // FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from "react";

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


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This just tells react to run this code when page first loads
    apiCall();
    return () => {
      setData([]);
    };
  }, []);

  async function apiCall() {
    const querySnapshot = await getDocs(query(collection(db, "timeline"), orderBy("date")));
    querySnapshot.forEach((doc, key) => {
      console.log(doc.data())
      let document = { key: key, docID: doc.id, docData: doc.data() }; // This is custom object I created and added the data received from backend
      setData((prevState) => [...prevState, document]); // Here we append each document to an array, which is our state called "data"
    });
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' onClick= {()=>(scroll.scrollToTop())} exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/help1' exact component={Help1} />
          <Route path='/donateInd' exact component={Help2} />
          <Route path='/dif' exact component={DIF} />
          <Route path='/money' exact component={Money} />
          <Route path='/donatedev' exact component={DonateDev} />
          <Route path='/rev' exact component={Rev} />
          <Route path='/resource2' exact component={Resource2} />
          <Route path='/split' exact component={Split} />
          <Route path='/faq1' exact component={FAQ1} />
          <Route path='/grantees' exact component={Grantees} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/broadband' exact component={Broadband} />
          <Route path='/accessSJ' exact component={AccessSJ} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/resources' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/individual' exact component={Blog1} />
          <Route path='/org' exact component={Blog2} />
          <Route path='/blogsingle/:id' exact component={BlogSingle} />
          <Route path='/people' exact component={People} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/peoplesingle/:id' component={PeopleSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/digitalnav' component={Digitalnav} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path="*" component={Home} />

        </Switch>
        <Footer />

       
      </Router>

      {/*
      <section>
        <div className="App">
          {data && ( // This just says: if data exists, then show this code
            <>
              {data.map((item, key) => {
                return (
                  <Timeline timelineData={item.docData}/>
                  );
              })}
            </>
          )}
        </div>
      </section>*/}
    </>
  )
}

export default App
