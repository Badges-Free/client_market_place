import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiRequest } from "../../ApiRequest";
import { useAuth } from "../../utils/auth";
import { url } from "../../config";

function Profile() {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const naveigate = useNavigate();
  const fetchProfile = async () => {
    try {
      const response = await ApiRequest("GET", "api/v1/me", null, user);
      setData(response.user.profile);
      console.log(response.error);
    } catch (err) {
      naveigate("/");
      localStorage.clear();
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to={"/myaccount"} >
        <div className="w-[50px] h-[50px] overflow-auto border rounded-full">
        <img src={url + "uploads/" + data} alt="" className=" w-full h-full object-cover" />
        </div>
      </Link>
    </>
  );
}

export default Profile;
