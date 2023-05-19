import React, { useRef, useState } from 'react';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { useFormik } from "formik";

const pluginOptions = [
  {
    name: 'Comment System',
    image : 'https://www.feedbackexpress.com/wp-content/uploads/2018/05/amazon-product-reviews-guide.jpg',
    features: ['Attack', 'Insult', 'Threat', 'Obscene'],
    codeToCopy: `<div id="cmnt-plugin"></div>
<script src="http://localhost:5000/index.js"></script>`
  },
  {
    name: 'Review System',
    image: 'https://www.feedbackexpress.com/wp-content/uploads/2018/05/amazon-product-reviews-guide.jpg',
    features: ['Attack', 'Insult', 'Threat', 'Obscene'],
    codeToCopy: `<div id="review-plugin"></div>
<script src="http://localhost:5000/index.js"></script>`
  },
  
]

const PluginGen = () => {

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  }

  const displayPlugins = () => {
    return pluginOptions.map((plugin, index) => {
      return (
        <div className='col-md-4 mb-4'>
          <div className="card" key={index}>
            <img src={plugin.image} className='card-img-top' alt=""/>
            <div className="card-body">
              <h5 className="card-title">{plugin.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Features</h6>
              <p className="card-text">{plugin.features.join(', ')}</p>
              <button className="btn btn-primary" onClick={() => copyToClipboard(plugin.codeToCopy)}>Copy Code</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Choose Your Plugin</h1>
        <hr className='mb-5' />

        <div className='row'>

          {displayPlugins()}
        </div>
      </div>
    </>

  )
}

export default PluginGen