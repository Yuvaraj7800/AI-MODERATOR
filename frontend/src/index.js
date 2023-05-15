import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentPlugin from './components/user/comment';
import ReviewPlugin from './components/user/review';

const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}

const commentEl = document.getElementById('cmnt-plugin');
if (commentEl) {
  const comment = ReactDOM.createRoot(commentEl);
  comment.render(
    <React.StrictMode>
      <CommentPlugin />
    </React.StrictMode>
  );

}

const reviewEl = document.getElementById('review-plugin');
if (reviewEl) {
  const comment = ReactDOM.createRoot(reviewEl);
  comment.render(
    <React.StrictMode>
      <ReviewPlugin />
    </React.StrictMode>
  );

}





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
