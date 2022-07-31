import "./App.css";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home/Home";
import ScrollButton from "./Components/ScrollButton/ScrollButton";
import Navbar from "./Shared/Navbar/Navbar";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import NotFound from "./Shared/NotFound/NotFound";
export const InitializeContext = createContext(null)

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(JSON.parse(window.localStorage.getItem("theme")));
  }, []);

  const handleThemeChange = () => {
    setTheme(!theme);
    window.localStorage.setItem("theme", !theme);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div data-theme={theme && "night"}>
    <InitializeContext.Provider value={{handleThemeChange, theme}}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />}></Route>
      </Routes>
    <ScrollButton />
    <Toaster />
    </InitializeContext.Provider>
  </div>
  );
}

export default App;
