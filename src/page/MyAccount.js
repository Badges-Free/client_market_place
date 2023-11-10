import React, { useEffect, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyAccount = () => {
  const [user, setUser] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [lastNameChangeDate, setLastNameChangeDate] = useState(null);
  const [messageUserName, setMessageUserName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [message, setMessage] = useState("");
  
  const name = useRef();
  const username = useRef();
  const gender = useRef();
  const dob = useRef();
  const address = useRef();
  const email = useRef();
  const phone = useRef();

  const fetchApiData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const UserId = sessionStorage.getItem("SIGNIN_INFO");
    const response = await fetch(`http://localhost:3001/users?id=${UserId}`, requestOptions);
    const data = await response.json();

    setUser(data[0]);
    setLastNameChangeDate(new Date(data[0].updatedAt));
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleDateChange = (updatedAt) => {
    setSelectedDate(updatedAt);
  };

  const handlePhoneNumberInput = (e) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, "");
    phone.current.value = numericValue;
  };

  const handleGeneral = async (e) => {
    e.preventDefault();
    const UserId = sessionStorage.getItem("SIGNIN_INFO");
    const now = new Date();

    const newUserName = username.current.value;
    const newName = name.current.value;
    const newEmail = email.current.value;
    const newAddress = address.current.value;

    const selectedDateTimeInCambodia = new Date(selectedDate);
    selectedDateTimeInCambodia.setHours(selectedDateTimeInCambodia.getHours() + 7);
    const formattedDate = now.toISOString();

    try {
      const response = await fetch(`http://localhost:3001/users/${UserId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          username: newUserName,
          gender: selectedOption,
          address: newAddress,
          email: newEmail,
          phone: phone.current.value,
          dob: selectedDateTimeInCambodia.toISOString(),
          updatedAt: formattedDate,
        }),
      });
      const data = await response.json();
      setUser(data);
      setLastNameChangeDate(now);
    } catch (error) {
      console.log(error);
    }
  }; //handle general end

  //check username
  const validateUsername = async (newUsername, UserId) => {
    const usernameResponse = await fetch(`http://localhost:3001/users?username=${newUsername}`);
    const existingUserName = await usernameResponse.json();
  
    if (existingUserName.length > 0 && existingUserName[0].id !== UserId) {
      setMessageUserName( "Sorry, this username is already in use. Please choose another name.");
    }
    
    const now = new Date();
    const timeSinceLastChange = now - lastNameChangeDate;
    const thirtyDaysInMillis = 30 * 24 * 60 * 60 * 1000;
  
    if (timeSinceLastChange < thirtyDaysInMillis) {
      setMessage("You can only change your username once in 30 days.");
    }
    
    return ""; // Return an empty string if validation is successful
  };
  

  const handleUsernameChange = async () => {
    const UserId = sessionStorage.getItem("SIGNIN_INFO");
    const newUserName = username.current.value;

    const validationMessage = await validateUsername(newUserName, UserId);
    setMessageUserName(validationMessage);
  };

  return (
    <>
      <div className=" bg-white p-5 rounded-[10px] shadow-lg">
        <h1 className=" font-bold text-xl">General</h1>
        <form onSubmit={handleGeneral}>
          {message && (
            <div className="text-red text-sm ">
              <div>{message}</div>
            </div>
          )}
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
                onBlur={handleUsernameChange}
              />
              {messageUserName && (
                <div className="text-red text-xs ">
                  <div>{messageUserName}</div>
                </div>
              )}
            </div>
            <div className="col-span-3">
              <label>Gender</label>
              <select
                id="selectBox"
                className="h-[45px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                value={selectedOption}
                onChange={handleOptionChange}
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
                onChange={handlePhoneNumberInput}
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
