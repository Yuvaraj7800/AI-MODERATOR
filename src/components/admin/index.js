import React from 'react'
import { Outlet } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Outlet/>
    </div>
  )
}

export default Admin;
