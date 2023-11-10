import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ApiRequest } from "../../ApiRequest";
import { useAuth } from "../../utils/auth";

function Profile() {
  const [data, setData] = useState([]);
  const { user } = useAuth();
  const fetchProfile = async () => {
    try {
      const response = await ApiRequest("GET", "api/v1/me", null, user);
      setData(response.user.profile);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-[1px]">
        <Link
          to={"/myaccount"}
          className="w-full h-full object-cover  "
        >
          {}
          <img src={data} alt="" />
        </Link>
      </div>
    </>
  );
}

export default Profile;
