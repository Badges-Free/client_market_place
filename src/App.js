import React, { Suspense} from "react";

import FooterMobile from "./layout/FooterMobile";
import Loading from "./component/loading/Loading";

// import  Header from"./layout/Header";
import { isMobile } from "react-device-detect";
import HeaderMobile from "./layout/HeaderMobile";
function App() {
  return (
    <>
      {/* <Header /> */}
      <HeaderMobile/>
        <Suspense fallback={<Loading />}>
          
        </Suspense>

  {
    isMobile ?   <FooterMobile /> :""
  }
    
    </>
  );
}

export default App;
