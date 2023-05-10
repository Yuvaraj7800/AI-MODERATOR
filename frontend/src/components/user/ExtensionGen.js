import React, { useRef, useState } from 'react';
import MultipleValueTextInput from 'react-multivalue-text-input';

const ExtensionGen = () => {

  const scriptData = `
  console.log('Script running in background');`

  const titleRef = useRef(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [link, setLink] = useState('');

  const generateExtension = async () => {
    const res = await fetch('http://localhost:5000/extension/generate', {
      method: 'POST',
      body: JSON.stringify({
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
            ref={titleRef}
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

          <MultipleValueTextInput
            onItemAdded={(item, allItems) => console.log(`Item added: ${item}`)}
            onItemDeleted={(item, allItems) => console.log(`Item removed: ${item}`)}
            label="Items"
            name="item-input"
            placeholder="Enter whatever items you want; separate them with COMMA or ENTER."
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type='button' className='btn btn-primary' onClick={generateExtension} >Generate</button>{
            link ?  <a className='btn btn-success'  href={link} >Download</a>
            :
            ''
          }
        </form>
      </div>
      {/* Bootstrap JS */}
    </>


  )
}

export default ExtensionGen