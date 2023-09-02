import React, { Suspense, lazy } from "react";

import FooterMobile from "./layout/FooterMobile";
import Loading from "./component/loading/Loading";

import  Header from"./layout/Header";
import {isMobile} from "react-device-detect";
import HeaderMobile from "./layout/HeaderMobile";
import { Route, Routes } from "react-router-dom";
import Cars from "./page/Cars";
import Properties from "./page/Properties.js"
import Footer from "./layout/Footer";
import Computers from "./page/Computers";
import Fashions from "./page/Funitures";
import Funitures from "./page/Funitures";
import Pets from "./page/Pets";
import Educations from "./page/Educations";
import Toys from "./page/Toys";
import Foods from "./page/Foods";
const   Home = lazy(()=> import("./page/Home") );

function App() {
  return (
    <>
    {
      isMobile ? <HeaderMobile/>  : <Header/>
    }
      
      {/* <CategoryProducts/>  */}

 

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/cars&vichicales" element={ <Cars/>}/>
          <Route path="/properties" element={ <Properties/>}/>
          <Route path="/computers" element={<Computers/>}/>
          <Route path="/fashions" element={<Fashions/>}/>
          <Route path="/funitures" element={<Funitures/>}/>
          <Route path="/pets" element={<Pets/>}/>
          <Route path="/education" element={<Educations/>}/>
          <Route path="/kid-toy" element={<Toys/>}/>
          <Route path="/foods" element={<Foods/>}/>
        </Routes>
       
      </Suspense>


      {
     
      isMobile ?  <FooterMobile /> : <Footer/> 
      }

    </>
  );
}

export default App;
