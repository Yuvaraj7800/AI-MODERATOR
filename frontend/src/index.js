import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentPlugin from './components/user/comment';

const rootEl = document.getElementById('root');

if(rootEl){
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}

const pluginEl = document.getElementById('plugin');
if(pluginEl){
  const plugin = ReactDOM.createRoot(pluginEl);
  plugin.render(
    <React.StrictMode>
      <CommentPlugin />
    </React.StrictMode>
  );

}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
