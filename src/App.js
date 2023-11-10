import React, { Suspense, lazy } from "react";

// import FooterMobile from "./layout/FooterMobile";
import Loading from "./component/loading/Loading";

import Header from "./layout/Header";

import { Route, Routes } from "react-router-dom";
import Cars from "./page/Cars";
import Properties from "./page/Properties.js";
// import Footer from "./layout/Footer";
import Computers from "./page/Computers";
import Fashions from "./page/Fashions";
import Funitures from "./page/Funitures";
import Pets from "./page/Pets";
import Educations from "./page/Educations";
import Toys from "./page/Toys";
import Foods from "./page/Foods";
import SignIn from "./component/sign-in/SignIn";
import SignUp from "./component/sign-up/SignUp";

import Page404 from "./page/Page404.js";
import RequireAuth from "./utils/RequireAuth.js";
import MyAccountRoute from "./page/my-account/MyAccountRoute.js";
import RequireMyAcount from "./utils/RequireMyAccount.js";

const Home = lazy(() => import("./page/Home"));

function App() {
  return (
    <>
      <Header />
      {/* <CategoryProducts/>  */}
      <div className="w-full xl:w-[1400px] m-auto">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars&vichicales" element={<Cars />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/computers" element={<Computers />} />
            <Route path="/fashions" element={<Fashions />} />
            <Route path="/funitures" element={<Funitures />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/education" element={<Educations />} />
            <Route path="/kid&toy" element={<Toys />} />
            <Route path="/foods" element={<Foods />} />
            <Route
              path="/signin"
              element={
                <RequireAuth>
                  <SignIn />
                </RequireAuth>
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/myaccount/*" element={
              <RequireMyAcount>
                 <MyAccountRoute />
              </RequireMyAcount>
            } />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
