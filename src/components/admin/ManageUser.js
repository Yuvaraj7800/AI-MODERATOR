import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageUser = () => {
  const [userList, setUserList] = useState([]);

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/user/getall");
    const data = await res.json();
    console.log(data);
    setUserList(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const deleteUser = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/user/delete/' + id, { method: 'DELETE' });
    if (res.status === 200) {
      fetchUserData();
    }
  }

  return (
    <div>
      <div className="container">
        {/* <h3>Loggedin as {currentUser.name}</h3> */}
        <h1>User Manager</h1>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td>
                  <Link to={'/admin/update/' + user._id}><button className="btn btn-primary" >
                    <i class="fas fa-edit"></i>
                  </button></Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;