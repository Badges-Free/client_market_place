import React, { useState } from "react";
import { ApiRequest } from "../../ApiRequest";
import { useParams } from "react-router-dom";

function ResetPassword() {

 
  const [ password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const {resettokencode}= useParams();

  const handleResetPassword = async () => {
    try {
      const response = await ApiRequest(
        "POST",
        `api/v1/password/reset/${resettokencode}`,
        { password, comfirmPassword }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full flex justify-center items-center h-[80vh]">
      <div className=" w-full max-w-xs">
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              onChange={(e) => setPassword(e.target.value) }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
              onChange={(e) => setComfirmPassword(e.target.value) }

            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleResetPassword()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
