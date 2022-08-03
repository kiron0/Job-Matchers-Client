import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import auth from "../../../Firebase/Firebase.config";
import { InitializeContext } from "../../../App";
import control from "./assets/control.png";
import logo from "./assets/logo.png";
import Chart_fill from "./assets/Chart_fill.png";
import Chat from "./assets/Chat.png";

const Dashboard = () => {
  useTitle("Dashboard");
  const { handleThemeChange, theme } = useContext(InitializeContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await signOut(auth).then(() => {
      navigate("/");
      toast.success(`Thank you, ${user.displayName} to stay with us!`, {
        autoClose: 3000,
        position: "bottom-left",
      });
    });
  };

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Accounts", src: "User", gap: true, route: "dashboard" },
    { title: "Schedule ", src: "Calendar", route: "dashboard" },
    { title: "Search", src: "Search", route: "dashboard" },
    { title: "Analytics", src: "Chart", route: "dashboard" },
    { title: "Files ", src: "Folder", gap: true, route: "dashboard" },
    { title: "Setting", src: "Setting", route: "dashboard" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-primary h-screen p-5  pt-8 relative duration-300`}
      >
        <RiMenuUnfoldFill
          className={`absolute cursor-pointer -right-12 -top-10 w-7 border-dark-purple
           rounded text-[10rem] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            <Link to="/">Job Matchers</Link>
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className="rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm 
            "
          >
            <Link to="/dashboard" className="flex gap-x-4 items-center">
              <img src={Chart_fill} alt="" title="Dashboard" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </Link>
          </li>
          <li
            className="rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm 
            "
          >
            <Link to="/inbox" className="flex items-center gap-x-4">
              <img src={Chat} alt="" title="Dashboard" />

              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Inbox
              </span>
            </Link>
          </li>
          <li className="">
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
