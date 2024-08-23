// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignInParent from './Pages/SignInParent';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

onAuthStateChanged(auth, (user) => {
  if (user) {
    root.render(
      <React.StrictMode>
        <App uid={user.uid.toString()} />
      </React.StrictMode>
    );
  } else {
    root.render(
      <React.StrictMode>
        <SignInParent />
      </React.StrictMode>
    );
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
