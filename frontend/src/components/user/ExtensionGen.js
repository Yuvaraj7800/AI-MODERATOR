import React from 'react'

const ExtensionGen = () => {
  return (
    <>
    <title>Form Example</title>
    {/* Bootstrap CSS */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <div className="container mt-5">
      <h1>Form Example</h1>
      <form>
        <div className="form-group">
          <label htmlFor="textInput">Text Field</label>
          <input
            type="text"
            className="form-control"
            id="textInput"
            placeholder="Enter text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageInput">Image Field</label>
          <input type="file" className="form-control-file" id="imageInput" />
        </div>
        <div className="form-group">
          <h5>Features:</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="attackCheckbox"
            />
            <label className="form-check-label" htmlFor="attackCheckbox">
              Attack
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="insultCheckbox"
            />
            <label className="form-check-label" htmlFor="insultCheckbox">
              Insult
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="threatCheckbox"
            />
            <label className="form-check-label" htmlFor="threatCheckbox">
              Threat
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="obsceneCheckbox"
            />
            <label className="form-check-label" htmlFor="obsceneCheckbox">
              Obscene
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    {/* Bootstrap JS */}
  </>
  

  )
}

export default ExtensionGen