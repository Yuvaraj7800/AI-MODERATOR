import React from 'react'

const Selectoption = () => {
  return (
    <>
  <title>Service Selection</title>
  {/* Bootstrap CSS */}
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  />
  <div className="container mt-5">
    <h1>Service Selection</h1>
    <p>Please select the service you would like to use:</p>
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Extension</h5>
            <p className="card-text">Description of Extension</p>
            <a href="http://localhost:3000/user/extensiongen" className="btn btn-primary">
              Generate Extension
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Plugin</h5>
            <p className="card-text">Description of Plugin</p>
            <a href="http://localhost:3000/user/plugingen" className="btn btn-primary">
              Generate Plugin
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap JS */}
</>

  )
}

export default Selectoption