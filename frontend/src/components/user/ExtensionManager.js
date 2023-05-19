import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const ExtensionManager = () => {

  const scriptData = `
  console.log('Script running in background');`

  const [extensionList, setExtensionList] = useState([]);
  const [link, setLink] = useState('');

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const fetchExtensionData = async () => {
    const res = await fetch("http://localhost:5000/extension/getbyuser/"+currentUser._id);
    const {result} = await res.json();
    console.log(result);
    setExtensionList(result);
  };

  useEffect(() => {
    fetchExtensionData();
  }, []);

  const deleteExtension = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/extension/delete/' + id, { method: 'DELETE' });
    if (res.status === 200) {
      toast.success('Extension deleted');
      fetchExtensionData();
    }
  }

  const generateExtension = async (configOptions) => {
    const res = await fetch('http://localhost:5000/extension/generate', {
      method: 'POST',
      body: JSON.stringify({
        configOptions,
        filename: 'myfile', imagesData: ['icon_48.png', 'icon_128.png'], manifestData: '', scriptData, htmlData: '<h1>My Custom Extension</h1>'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const {downloadLink} = await res.json();
    setLink(downloadLink);
    console.log(downloadLink);
  }

  return (
    <div>
      <div className="container">
        {/* <h3>Loggedin as {currentExtension.name}</h3> */}
        <h1>Extension Manager</h1>
        <hr />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th colSpan={2} className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {extensionList.map((extension) => (
              <tr key={extension._id}>
                <td>{extension.title}</td>
                <td>{extension.email}</td>
                <td>{extension.password}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteExtension(extension._id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => generateExtension(extension)}>
                    Generate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtensionManager;