import React from 'react'

const ExtensionManager = () => {

  const scriptData = `
console.log('Script running in background');`

    const generateExtension = async () => {
        const res = await fetch('http://localhost:5000/extension/generate', {
            method: 'POST',
            body : JSON.stringify({
                filename: 'myfile', imagesData: ['icon_48.png', 'icon_128.png'], manifestData: '', scriptData, htmlData: '<h1>My Custom Extension</h1>'
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
    }

  return (
    <div>
        <h1>ExtensionManager</h1>
        <hr />
        <button className='btn btn-primary' onClick={generateExtension} >Generate</button>
    </div>
  )
}

export default ExtensionManager;