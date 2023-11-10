import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { useAuth } from "../../utils/auth";
const SettingMenu = [
  {
    id: 1,
    icon: <FaUserCheck />,
    title: "ACCOUNT",
    options: [
      { name: "General", slug: "" },
      { name: "Password & Security", slug: "password" },
    ],
  },
  {
    id: 2,
    icon: <FaFileInvoice />,
    title: "PREFERENCE",
    options: [
      { name: "Favorite", slug: "favorite" },
      // { name: "Save", slug: "save" },
      // { name: "Language", slug: "language" },
    ],
  },
  {
    id: 3,
    icon: <FaBell />,
    title: "NOTIFICATION",
    options: [{ name: "Notification", slug: "notification" }],
  },
];

function MyAccountLayout() {
  const {logout} = useAuth();
  return (
    <>
      <main role="main" className=" mx-auto w-[1030px]  flex gap-5 py-5 ">
        <div className="  bg-white shadow-lg rounded-[10px] h-[464px] w-[295px] p-5">
          <h1 className="text-2xl h-8 font-semibold ">Settings</h1>
          {SettingMenu.map((item, index) => (
            <div key={index}>
              <div className="flex  my-2.5 ">
                <div className=" pt-1 pr-2"> {item.icon}</div>
                <div className="font-medium uppercase">{item.title}</div>
              </div>
              <ul className="flex flex-col gap-[5px]">
                {item.options.map((option, index) => (
                  <NavLink
                    key={index}
                    end
                    to={`${option.slug}`}
                    className={({ isActive }) => {
                      return (
                        "nav-link h-[39px] flex items-center p-2 hover:text-white hover:bg-blue-800 rounded-[5px] transition-all duration-[10ms] ease-out " +
                        (!isActive
                          ? "text-sub-title"
                          : "text-[#FFFFFF] bg-blue-800")
                      );
                    }}
                  >
                    <li key={option.name} className=" px-2 font-normal	">
                      {option.name}
                    </li>
                  </NavLink>
                ))}
                  <NavLink onClick={()=> logout()}>
                      Logout
                  </NavLink>
              </ul>
            </div>
          ))}
        </div>
        {/* other route */}
        <div className=" flex-auto ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default MyAccountLayout;
