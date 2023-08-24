import React, { Suspense } from "react";

import FooterMobile from "./layout/FooterMobile";
import Loading from "./component/loading/Loading";

import  Header from"./layout/Header";
import { isMobile } from "react-device-detect";
import HeaderMobile from "./layout/HeaderMobile";
import Home from "./page/Home";
function App() {
  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}

      <Suspense fallback={<Loading />}>
        <Home/>
      </Suspense>

      {isMobile ? <FooterMobile /> : ""}
    </>
  );
}

export default App;
