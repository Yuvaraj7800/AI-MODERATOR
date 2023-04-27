//import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Navbar from './components/main/Navbar';
import Signup from './components/main/Signup';
import EventHandling from './components/main/EventHandling';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManageUser from './components/admin/ManageUser';
import UpdateUser from './components/admin/UpdateUser';
import Admin from './components/admin';
import ToxicityPrediction from './components/Toxicity';


function App() {
  return (
    <div>

      <BrowserRouter>

        <Routes>
          <Route path='main' element={<Main />} >
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='event' element={<EventHandling />} />

          </Route>
          <Route path='admin' element={<Admin />}>
            <Route path='manage' element={<ManageUser />} />
            <Route path='update/:userid' element={<UpdateUser />} />
          </Route>
            <Route path='toxic' element={<ToxicityPrediction />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;