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
      { name: "Password&Security", slug: "password" },
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
  const { logout } = useAuth();
  return (
    <>
      <main role="main" className=" mx-auto  flex flex-col md:flex-row gap-5 py-5 px-5  xl:px-0 ">
        <div className=" fixed left-0 top-[81px] md:top-0 md:relative flex items-center md:items-start md:flex-col overflow-scroll md:overflow-hidden bg-white shadow-lg rounded-[10px] h-fit w-full md:w-[295px] md:p-5 p-2">
          <h1 className="text-2xl h-8 font-semibold hidden md:flex">Settings</h1>
          {SettingMenu.map((item, index) => (
            <div key={index} className="w-full" >
              <div className="hidden md:flex  my-2.5 ">
                <div className=" pt-1 pr-2"> {item.icon}</div>
                <div className="font-medium uppercase">{item.title}</div>
              </div>
              <ul className="flex flex-row md:flex-col gap-[5px] w-full">
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
              </ul>
            </div>
          ))}
          <NavLink onClick={() => logout()} >Logout</NavLink>
        </div>
        {/* other route */}
        <div className=" flex-auto mt-16 ">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default MyAccountLayout;
