import React, { useRef, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyAccount = () => {
  const [user, setUser] = useState([]);
 
  // const [selectedDate, setSelectedDate] = useState(null);

  const name = useRef();
  const username = useRef();
  const gender = useRef();
  // const dob = useRef();
  const address = useRef();
  const email = useRef();
  const phone = useRef();

  




  return (
    <>
      <div className=" bg-white p-5 rounded-[10px] shadow-lg">
        <h1 className=" font-bold text-xl">General</h1>
        <form >
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
                ref={name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="col-span-3">
              <label>Username</label>
              <input
                type="text"
                id="username"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full  px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Username"
                value={user.username}
                ref={username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
               
              />
           
            </div>
            <div className="col-span-3">
              <label>Gender</label>
              <select
                id="selectBox"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                value=""
             
              >
                <option value="">Select</option>
                <option ref={gender} value="male">
                  Male
                </option>
                <option ref={gender} value="female">
                  Female
                </option>
              </select>
            </div>
            <div className="col-span-3 flex flex-col">
              <label>Date of Birth</label>
              {/* <DatePicker
                id="dob"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-[349px] px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MMM/yyyy"
                ref={dob}
              /> */}
              <input type="date" className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"/>
            </div>
            <div className="col-span-6">
              <label>Address</label>
              <input
                type="text"
                id="address"
                className=" h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Address"
                ref={address}
              />
            </div>

            <div className="col-span-3">
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="example@gmail.com"
                value={user.email}
                ref={email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="col-span-3">
              <label>Phone</label>
              <input
                type="tel"
                id="phone"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                placeholder="Phone number"
                ref={phone}
                
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
