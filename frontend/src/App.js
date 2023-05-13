//import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';
import AboutUs from './components/main/AboutUs';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ManageUser from './components/admin/ManageUser';
import UpdateUser from './components/admin/UpdateUser';
import Admin from './components/admin';
import ToxicityPrediction from './components/Toxicity';
import ExtensionManager from './components/user/ExtensionManager';
import User from './components/user';
import ModeratorPlugin from './plugin/ModeratorPlugin';
import Selectoption from './components/user/Selectoption';
import Extension from './components/user/ExtensionGen';
import Plugin from './components/user/PluginGen';
import Comment from './components/user/comment';
import Review from './components/user/review';
import UserAuth from './auth/UserAuth';
import ContactUs from './components/main/ContactUs';





function App() {
  return (
    <div>

     

      <BrowserRouter>

        <Routes>
          
          <Route path='/' element={<Navigate to="/main/home" />} />
          <Route path='main' element={<Main />} >
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='aboutus' element={<AboutUs/>} />
            <Route path='contactus' element={<ContactUs/>} />
          </Route>
          <Route path='admin' element={<Admin />}>
            <Route path='manage' element={<ManageUser />} />
            <Route path='update/:userid' element={<UpdateUser />} />
          </Route>

          <Route path='user' element={ <UserAuth> <User /> </UserAuth> }>
            <Route path='extension' element={<ExtensionManager />} />
            <Route path='modplugin' element={<ModeratorPlugin />} />
            <Route path='select' element={<Selectoption />} />
            <Route path='extensiongen' element={<Extension />} />
            <Route path='plugingen' element={<Plugin />} />
            <Route path='comment' element={<Comment />} />
            <Route path='review' element={<Review />} />
          </Route>
            <Route path='toxic' element={<ToxicityPrediction />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;