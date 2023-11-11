import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApiRequest } from "../ApiRequest";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const auth = useAuth();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const response = await ApiRequest("GET", "api/v1/me", null, auth.user);
      setUser(response.user);
      if(response.error){
        localStorage.clear("");
        navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {console.log(user)}
      <div className=" bg-white p-5 rounded-[10px] shadow-lg">
        <h1 className=" font-bold text-xl">General</h1>
        <form>
          {/* {message && (
            <div className="text-red text-sm ">
              <div>{message}</div>
            </div>
          )} */}
          <div className="grid grid-cols-6 gap-5 text-sm  pt-6">
            <div className="col-span-3  ">
              <label>Fullname</label>
              <input
                type="text"
                id="name"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Name"
                value={user.name}
              />
            </div>
            <div className="col-span-3">
              <label>Username</label>
              <input
                readOnly
                type="text"
                id="username"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full  px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Username"
                value={user.username}
              />
            </div>
            <div className="col-span-3">
              <label>Gender</label>
              <select readOnly value={user.gender} className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue">
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-span-3 flex flex-col">
              <label>Date of Birth</label>

              <input
              
                defaultValue="2023-11-12"
                type="date"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
              />
            </div>
            <div className="col-span-6">
              <label>Address</label>
              <input
                type="text"
                id="address"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Address"
                value={user.address}
              />
            </div>
            <div className="col-span-6">
              <label>Map</label>
              <input
                type="text"
                id="address"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Address"
                value={user.map}
              />
            </div>

            <div className="col-span-3">
              <label>Email</label>
              <input
              readOnly
                type="email"
                id="email"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="example@gmail.com"
                value={user.email}
              />
            </div>

            <div className="col-span-3">
              <label>Phone</label>
              <input
                type="tel"
                value={user.phone}
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Phone number"
              />
            </div>

            <div className="col-span-6 text-right ">
              <button
                type="submit"
                className=" text-[#fff] py-2 px-6 rounded-[5px] bg-[#0055FF] my-2"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyAccount;
