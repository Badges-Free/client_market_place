import React, { Suspense, lazy } from 'react';

import FooterMobile from './layout/FooterMobile';
import Loading from './component/loading/Loading';

const Header = lazy(()=> import('./layout/Header'));


function App() {
  return (
   <>

   <Suspense fallback={<Loading/>} >
    
    <Header/>

   </Suspense>
   <FooterMobile/>

   
   </>
  );
}

export default App;
