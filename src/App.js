import React, { Suspense, lazy } from "react";

import FooterMobile from "./layout/FooterMobile";
import Loading from "./component/loading/Loading";

import  Header from"./layout/Header";
import {isMobile} from "react-device-detect";
import HeaderMobile from "./layout/HeaderMobile";
import { Route, Routes } from "react-router-dom";
import CategoryProducts from "./page/CategoryProducts";
import Cars from "./page/Cars";
import Properties from "./page/Properties.js"
import Footer from "./layout/Footer";
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
        </Routes>
       
      </Suspense>


      {
     
      isMobile ?  <FooterMobile /> : <Footer/> 
      }

    </>
  );
}

export default App;
