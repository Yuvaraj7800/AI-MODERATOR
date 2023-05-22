//import logo from './logo.svg';
import "./App.css";

import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Navbar from "./components/main/Navbar";
import Signup from "./components/main/Signup";
import AboutUs from "./components/main/AboutUs";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./components/admin";
import ManageUser from "./components/admin/ManageUser";
import UpdateUser from "./components/admin/UpdateUser";

import ToxicityPrediction from "./components/Toxicity";
import ExtensionManager from "./components/user/ExtensionManager";
import User from "./components/user";
import ModeratorPlugin from "./plugin/ModeratorPlugin";

import Extension from "./components/user/ExtensionGen";
import Plugin from "./components/user/PluginGen";
import Comment from "./components/user/comment";
import Review from "./components/user/review";
import UserAuth from "./auth/UserAuth";
import ContactUs from "./components/main/ContactUs";
import { Toaster } from "react-hot-toast";
import CustomizePlugin from "./components/user/CustomizePlugin";
import { useState } from "react";
import UserProvider from "./context/UserProvider";
import Dashboard from "./components/user/Dashboard";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  return (
    <div>
      <Toaster position="top-center" />
      <BrowserRouter>
        <UserProvider currentUser={currentUser}>
          <Routes>
            <Route path="/" element={<Navigate to="/main/home" />} />
            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="contactus" element={<ContactUs />} />
            </Route>
            
            <Route path="admin" element={<Admin />}>
              <Route path="manage" element={<ManageUser />} />
              <Route path="update/:userid" element={<UpdateUser />} />
            </Route>

            <Route
              path="user"
              element={
                <UserAuth>
                  <User />
                </UserAuth>
              }
            >
              <Route path="manageextension" element={<ExtensionManager />} />
              <Route path="modplugin" element={<ModeratorPlugin />} />

              <Route path="extensiongen" element={<Extension />} />
              <Route path="plugingen" element={<Plugin />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="custPlugin" element={<CustomizePlugin />} />
              <Route
                path="custPlugin/:pluginName"
                element={<CustomizePlugin />}
              />
              <Route path="comment" element={<Comment userid={'6467b6bbf75c23a105ce440a'} />} />
              <Route path="review" element={<Review />} />
              <Route path="toxic" element={<ToxicityPrediction />} />

              <Route path="extensiongen" element={<Extension />} />
              <Route path="plugingen" element={<Plugin />} />
              <Route path="comment" element={<Comment />} />
              <Route path="review" element={<Review />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
