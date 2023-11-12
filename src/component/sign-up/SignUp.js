import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ApiRequest } from "../../ApiRequest";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelRegister = async () => {
    try {
      if(!email && !password){
        alert("Please Enter email and password as strong ")
      }
      const response = await ApiRequest(
        "POST",
        "api/v1/register",
        { email, password }
      );
      console.log(response)
      if(response.error){
        alert(response.error)
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" w-full flex justify-center items-center h-[80vh]">
        <div className=" w-full max-w-xs ">
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
                onChange={(e)=> setPassword(e.target.value)}
              />
              <p className="text-red-500 text-xs italic">
                Your password must be strong{" "}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={()=> handelRegister()}
              >
                Sign Up
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to={"/signin"}
              >
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
