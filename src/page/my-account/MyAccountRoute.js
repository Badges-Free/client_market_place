import React from 'react'
import { Routes, Route } from "react-router-dom"
import MyAccountLayout from './MyAccountLayout'
import MyAccount from '../MyAccount'
import Password from './Password'
function MyAccountRoute() {
  return (
    <>
        <Routes>
           <Route element={<MyAccountLayout/>}>
                <Route index element={<MyAccount/>}/>
                <Route path='password' element={<Password/>}/>
           </Route>
        </Routes>
    </>
  )
}

export default MyAccountRoute