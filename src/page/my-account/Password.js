import React, { useEffect, useState, useRef } from "react";

function Password() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");
  const [user, setUser] = useState({});
  const password = useRef();

  // fetch user data
  const fetchUser = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const UserId = sessionStorage.getItem("SIGNIN_INFO");
    await fetch(`http://localhost:3001/users?id=${UserId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  //handle Form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      console.error("User data not available");
      return;
    }

    // Check if the current password matches any user's password
    const matchingUser = user.find((userdata) => userdata.password === currentPassword);
    if (!matchingUser) {
      setPasswordError("Incorrect password. Please try again.");
      return;
    } else {
      setPasswordError("");
    }

    // Password strength validation
    if (
      newPassword.length < 8 ||
      !/(?=.*[A-Z])/.test(newPassword) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)
    ) {
      setNewPasswordError(
        "Password must be at least 8 characters long, contain at least one capital letter, and one special character"
      );
      return;
    } else {
      setNewPasswordError("");
    }
    //check if new password equal confirm password
    if (newPassword !== confirmPassword) {
      setNewPasswordError("Passwords do not match");
      return;
    } else {
      setNewPasswordError("");
    }

    // Password change logic (update password on the server)
    const updatedUser = { ...matchingUser, password: newPassword };
    const updateResponse = await fetch(`http://localhost:3001/users/${matchingUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });

    if (updateResponse.ok) {
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      fetchUser(); // refresh data after update
    } else {
      console.error("Error updating password");
    }
  };

  return (
    <>
      <div className="bg-white rounded-[10px] shadow-lg p-5">
        <h1 className="text-xl font-bold">Password & Security</h1>
        <div>
          <form onSubmit={handleFormSubmit}>
            {/* Hidden username field for accessibility */}
            <div style={{ display: "none" }}>
              <input type="text" autoComplete="username" aria-hidden="true" tabIndex="-1" />
            </div>
            <div className="grid grid-cols-5 gap-[10px] text-sm mt-2 pt-[10px]">
              <div className="pt-2">
                <label className="h-10">Current Password</label>
              </div>
              <div className="col-span-5">
                <input
                  type="password"
                  value={currentPassword}
                  autoComplete="current-password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="h-[41px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full py-2 px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                  placeholder="Current Password"
                  ref={password}
                />
                {passwordError && <p className="text-red">{passwordError}</p>}
              </div>
              <div className="pt-2">
                <label className="h-10">New Password</label>
              </div>
              <div className="col-span-5">
                <input
                  type="password"
                  value={newPassword}
                  autoComplete="new-password"
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-[41px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full py-2 px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                  placeholder="New Password"
                />
                {newPasswordError && <p className="text-[#FF0000]">{newPasswordError}</p>}
              </div>
              <div className="pt-2">
                <label className="h-10">Confirm Password</label>
              </div>
              <div className="col-span-5">
                <input
                  type="password"
                  value={confirmPassword}
                  autoComplete="new-password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-[41px] bg-button-blue bg-opacity-5 appearance-none border-2 border-button-blue border-opacity-5 rounded-lg w-full py-2 px-4 text-default leading-tight focus:outline-none focus:bg-white focus:border-button-blue"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="col-span-6 text-right">
                <div className="pr-3 mt-2">
                  <button
                    type="submit"
                    className="text-[#fff] py-2 px-6 rounded-[5px] bg-[#0055FF] font-normal"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Password;
