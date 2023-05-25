import React, { useRef, useState } from 'react';
import MultipleValueTextInput from 'react-multivalue-text-input';
import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../context/UserProvider';

const pluginOptions = [
  {
    name: 'Comment System',
    image: 'https://www.feedbackexpress.com/wp-content/uploads/2018/05/amazon-product-reviews-guide.jpg',
    features: ['Attack', 'Insult', 'Threat', 'Obscene'],
    link: '/user/custPlugin/comment',
    codeToCopy: `<div id="cmnt-plugin"></div>
<script src="http://localhost:5000/index.js"></script>`
  },
  {
    name: 'Review System',
    image: 'https://www.feedbackexpress.com/wp-content/uploads/2018/05/amazon-product-reviews-guide.jpg',
    features: ['Attack', 'Insult', 'Threat', 'Obscene'],
    link: '/user/custPlugin/review',
    codeToCopy: `<div id="review-plugin"></div>
<script src="http://localhost:5000/index.js"></script>`
  }
];

const PluginGen = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  const { updateUser } = useUserContext();

  const generatePlugin = async (link) => {
    await updateUser({ numPlugin: currentUser.numPlugin + 1 }, setCurrentUser);
  };
  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
  };

  const displayPlugins = () => {
    return pluginOptions.map((plugin, index) => {
      return (
        <div className="col-6 mb-4 ">
          <div className="card" key={index}>
            <img src={plugin.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{plugin.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Features</h6>
              <p className="card-text">{plugin.features.join(', ')}</p>
              <button onClick={async (e) => await generatePlugin(plugin.link)} className="btn btn-primary">
                Generate
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <section className=" col-log-6" style={{ backgroundColor: '#a3e7f7' }}>
        <div className="container ">
          <h1 className="text-center">Choose Your Plugin</h1>
          <hr className="mb-5" />

          <div className="row">{displayPlugins()}</div>
        </div>
      </section>
    </>
  );
};

export default PluginGen;
