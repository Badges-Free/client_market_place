import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ApiRequest } from "../ApiRequest";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const MyAccount = () => {
  const auth = useAuth();
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(""); // added file state
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [map, setMap] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await ApiRequest("GET", "api/v1/me", null, auth.user);
      setUsername(response.user.username);
      setGender(response.user.gender);
      setBirth(response.user.birth);
   
      setAddress(response.user.address);
      setMap(response.user.map);
      setPhone(response.user.phone);
      setUser(response.user);
      if (response.error) {
        localStorage.clear("");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("profile", profile); // append the file
      formData.append("gender", gender);
      formData.append("birth", birth);
      formData.append("address", address);
      formData.append("map", map);
      formData.append("phone", phone);

      const response = await ApiRequest(
        "PUT",
        "api/v1/update",
        formData,
        auth.user
      );
      console.log(response);
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
      <div className=" bg-white p-5 rounded-[10px] shadow-lg">
        <h1 className=" font-bold text-xl">General</h1>
        <form>
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
                type="text"
                id="username"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full  px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-span-3">
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="col-span-3 flex flex-col">
              <label>Date of Birth</label>

              <input
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                type="date"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
              />
            </div>
            <div className="col-span-6">
              <label>Profiel</label>
              <input
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue block text-sm  cursor-pointer bg-gray-50 dark:text-gray-400 "
                id="file_input"
                type="file"
                onChange={(e) => setProfile(e.target.files[0])}
              />
            </div>
            <div className="col-span-6">
              <label>Address</label>
              <input
                type="text"
                id="address"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-span-6">
              <label>Map</label>
              <input
                type="text"
                id="address"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Address"
                value={map}
                onChange={(e) => setMap(e.target.value)}
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
                value={phone}
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="col-span-6 text-right ">
              <button
                onClick={() => handleUpdate()}
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
