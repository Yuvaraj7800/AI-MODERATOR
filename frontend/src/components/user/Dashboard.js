import React, { useEffect, useState } from "react";
import app_config from "../../config";

const Dashboard = () => {
  const { apiUrl } = app_config;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [analysisData, setAnalysisData] = useState([]);

  const getAnalysisData = async () => {
    const response = await fetch(
      `${apiUrl}/analysis/getbyuser/${currentUser._id}`
    );
    const data = await response.json();
    console.log(data);
    setAnalysisData(data);
  };

  useEffect(() => {
    getAnalysisData();
  }, []);

  const displayAnalysisData = () => {
    return analysisData.map((data, index) => (
      <tr>
        <td>
          <p className="fw-bold mb-1">{data.plugin}</p>
        </td>
        <td>
          <p className="fw-normal mb-1">{data.text}</p>
        </td>
        <td>
          {data.status === "Not Toxic" ? (
            <span className="badge badge-success rounded-pill d-inline">
              {data.status}
            </span>
          ) : (
            <span className="badge badge-danger rounded-pill d-inline">
              {data.status}
            </span>
          )}
        </td>
        <td>
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            Edit
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <section className="py-5 bg-dark">
        <div className="container">
          <p className="display-1 fw-bold text-white">Plugin Dashboard</p>
        </div>
      </section>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Plugin</th>
              <th>Text</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{displayAnalysisData()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
