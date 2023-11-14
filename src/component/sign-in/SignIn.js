import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "../../ApiRequest";
import { useAuth } from "../../utils/auth";

// import axios from "axios";

function SignIn() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await ApiRequest("POST", "api/v1/login", {
        email,
        password,
      });
      if (response.error) {
        alert(response.error);
        return;
      }
      navigator("/");
      login(response.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForgot = async () => {
   
    try {
      const response = await ApiRequest("POST", "api/v1/password/forgot", {
        email,
      });
      
      if(response.success === true){
        localStorage.setItem("resetToken", response.resetToken);
        navigator(`/resetpassword/${response.resetToken}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full flex justify-center items-center h-[80vh]">
      <div className=" w-full max-w-xs">
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleLogin()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <button
              onClick={() => handleForgot()}
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
